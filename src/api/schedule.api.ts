import { AxiosError } from "axios";
import { api } from "./api";

export const GetDesignerSchedule = async () => {
  const path = "/schedule/readDesignerTimeSchedule";

  try {
    const response = await api.get(path, {
      params: {
        designerId: "1",
        date: "2025-02-17",
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[GetDesignerSchedule] 디자이너 스케줄 가져오기 실패: ",
        error.response?.data || "응답 없음"
      );
    } else {
      console.error(
        "[GetDesignerSchedule] 디자이너 스케줄 가져오기 실패 - 알 수 없는 에러: ",
        error
      );
    }
    throw error;
  }
};

export const UpdateDesignerSchedule = async (reservationData) => {
  const path = "/api/v1/schedule/updateDesignerTimeSchedule";

  try {
    const response = await api.patch(path, reservationData);
    const data = response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[UpdateDesignerSchedule] 디자이너 스케줄 수정하기 실패: ",
        error.response?.data || "응답 없음"
      );
    } else {
      console.error(
        "[UpdateDesignerSchedule] 디자이너 스케줄 수정하기 실패 - 알 수 없는 에러: ",
        error
      );
    }
    throw error;
  }
};
