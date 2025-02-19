import { AxiosError } from "axios";
import { ReservationRequest } from "../types/reservation.type";
import { api } from "./api";

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
