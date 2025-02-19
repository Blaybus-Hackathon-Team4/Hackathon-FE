import { AxiosError } from "axios";
import { api } from "./api";

type GetDesignerSchedule = {
  designerId: string;
  date: string;
};

export const GetDesignerSchedule = async ({
  designerId,
  date,
}: GetDesignerSchedule) => {
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
