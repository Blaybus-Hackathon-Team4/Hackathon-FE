import PortOne from "@portone/browser-sdk/v2";
import { useEffect, useState } from "react";

const STORE_ID = import.meta.env.VITE_STORE_ID;
const CHANNEL_KEY = import.meta.env.VITE_CHANNEL_KEY;

export function KakaoPay() {
  const dummy = { id: 1, name: "시술명", price: 2000, currency: "KRW" };

  const [item, setItem] = useState(dummy);
  const [paymentStatus, setPaymentStatus] = useState({
    status: "IDLE",
  });

  useEffect(() => {
    async function loadItem() {
      const response = await fetch("/api/item");
      setItem(await response.json());
    }

    loadItem().catch((error) => console.error(error));
  }, []);

  if (item == null) {
    return (
      <dialog open>
        <article aria-busy>결제 정보를 불러오는 중입니다.</article>
      </dialog>
    );
  }

  function randomId() {
    return [...crypto.getRandomValues(new Uint32Array(2))]
      .map((word) => word.toString(16).padStart(8, "0"))
      .join("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPaymentStatus({ status: "PENDING" });
    const paymentId = randomId();
    const payment = await PortOne.requestPayment({
      storeId: STORE_ID,
      channelKey: CHANNEL_KEY,
      paymentId,
      orderName: item.name,
      totalAmount: item.price,
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",
      customData: {
        item: item.id,
      },
    });
    if (payment.code !== undefined) {
      setPaymentStatus({
        status: "FAILED",
        message: payment.message,
      });
      return;
    }
    const completeResponse = await fetch("/api/payment/complete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentId: payment.paymentId,
      }),
    });
    if (completeResponse.ok) {
      const paymentComplete = await completeResponse.json();
      setPaymentStatus({
        status: paymentComplete.status,
      });
    } else {
      setPaymentStatus({
        status: "FAILED",
        message: await completeResponse.text(),
      });
    }
  };

  const isWaitingPayment = paymentStatus.status !== "IDLE";

  const handleClose = () =>
    setPaymentStatus({
      status: "IDLE",
    });

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <article>
            <div className="item">
              <div className="item-image">
                <img src={`/${item.id}.png`} />
              </div>
              <div className="item-text">
                <h5>{item.name}</h5>
                <p>{item.price.toLocaleString()}원</p>
              </div>
            </div>
            <div className="price">
              <label>총 구입 가격</label>
              {item.price.toLocaleString()}원
            </div>
          </article>
          <button
            type="submit"
            aria-busy={isWaitingPayment}
            disabled={isWaitingPayment}
          >
            결제
          </button>
        </form>
      </main>
      {paymentStatus.status === "FAILED" && (
        <dialog open>
          <header>
            <h1>결제 실패</h1>
          </header>
          <p>{paymentStatus.message}</p>
          <button type="button" onClick={handleClose}>
            닫기
          </button>
        </dialog>
      )}
      <dialog open={paymentStatus.status === "PAID"}>
        <header>
          <h1>결제 성공</h1>
        </header>
        <p>결제에 성공했습니다.</p>
        <button type="button" onClick={handleClose}>
          닫기
        </button>
      </dialog>
    </>
  );
}
