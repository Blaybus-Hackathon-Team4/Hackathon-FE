import { AxiosError } from "axios";
import { api } from "./api";

export const GetDesignerDetailInfo = async (designerId: string) => {
  const path = `/designer/readDesignerDetail/${designerId}`;

  try {
    const response = await api.get(path);
    const data = response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[GetDesignerDetailInfo] 디자이너 상세 정보 가져오기 실패: ",
        error.response?.data || "응답 없음"
      );
    } else {
      console.error(
        "[GetDesignerDetailInfo] 디자이너 상세 정보 가져오기 실패 - 알 수 없는 에러: ",
        error
      );
    }
    throw error;
  }
};
