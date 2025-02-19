import { AxiosError } from "axios";
import { ReservationRequest } from "../types/reservation.type";
import { api } from "./api";
import { useReservationStore } from "../zustand/reservation.store";

export const ReserveConsulting = async ({
  designerId,
  date,
  time,
  createdAt,
  isOnline,
}: ReservationRequest) => {
  const path = "/reservation/createReservation";

  try {
    const response = await api.post(path, {
      designerId,
      date,
      time,
      createdAt,
      isOnline,
    });
    const data = response.data;
    const { address, name, isOffline, offPrice, onPrice } =
      data.reservation.designer;
    // ✅ Zustand 상태 업데이트
    useReservationStore.getState().setReservationInfo({
      date,
      time,
      name: name, // 응답에 name이 포함된 경우
      price: isOffline ? offPrice : onPrice, // 응답에 price가 포함된 경우
      address: address, // 응답에 address가 포함된 경우
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[ReserveConsulting] 컨설팅 예약하기 실패: ",
        error.response?.data || "응답 없음"
      );
    } else {
      console.error(
        "[ReserveConsulting] 컨설팅 예약하기 실패 - 알 수 없는 에러: ",
        error
      );
    }
    throw error;
  }
};
