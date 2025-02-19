import { AxiosError } from "axios";
import { api } from "./api";

export const GetDesignerSchedule = async (designerId: string, date: string) => {
  const path = "/schedule/readDesignerTimeSchedule";

  try {
    const response = await api.get(path, {
      params: {
        designerId,
        date,
      },
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[GetDesignerSchedule] 디자이너 스케줄 조회 실패: ",
        error.response?.data || "응답 없음"
      );
    } else {
      console.error(
        "[GetDesignerSchedule] 디자이너 스케줄 조회 실패 - 알 수 없는 에러: ",
        error
      );
    }
    throw error;
  }
};

// export const UpdateDesignerSchedule = async (reservationData) => {
//   const path = "/schedule/updateDesignerTimeSchedule";

//   try {
//     const response = await api.patch(path, reservationData);
//     const data = response.data;
//     return data;
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       console.error(
//         "[UpdateDesignerSchedule] 디자이너 스케줄 수정하기 실패: ",
//         error.response?.data || "응답 없음"
//       );
//     } else {
//       console.error(
//         "[UpdateDesignerSchedule] 디자이너 스케줄 수정하기 실패 - 알 수 없는 에러: ",
//         error
//       );
//     }
//     throw error;
//   }
// };
