import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GetJwtToken } from "../../../api/login.api";
import UserIcon from "../../../assets/icons/user.svg";
import { useUserStore } from "../../../zustand/user.store";
import axios from "axios";

export interface IUserInfo {
  id: string; // Google 계정 고유 ID
  email: string; // 이메일 주소
  verified_email: boolean; // 이메일 인증 여부
  name: string; // 전체 이름 (예: '강조은')
  given_name: string; // 이름 (예: '조은')
  family_name: string; // 성 (예: '강')
  picture: string; // 프로필 이미지 URL
}

const LoginButton = () => {
  const navigate = useNavigate();
  const { setLogin } = useUserStore();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("✅ 구글 로그인 성공", response);

      try {
        // ✅ 액세스 토큰 저장 (sessionStorage 사용)
        sessionStorage.setItem("accessToken", response.access_token);

        // ✅ Google API를 통해 사용자 정보 가져오기
        const googleResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: { Authorization: `Bearer ${response.access_token}` },
          }
        );
        const userInfo: IUserInfo = googleResponse.data;

        console.log("✅ 사용자 정보:", userInfo);

        // ✅ Zustand 스토어 업데이트
        setLogin(userInfo.email, userInfo.name);

        // ✅ 서버에 액세스 토큰 전송하여 사용자 정보 가져오기
        const jwt = await GetJwtToken(userInfo);
        console.log("✅ 서버에서 받은 사용자 데이터:", jwt);

        sessionStorage.setItem("jwtToken", jwt.jwt);

        navigate("/"); // 로그인 성공 후 홈으로 이동
      } catch (error) {
        console.error("🚨 로그인 과정 중 오류 발생:", error);
      }
    },
    onError: () => {
      console.error("🚨 구글 로그인 실패");
    },
  });

  return (
    <div>
      <Button onClick={() => login()}>
        <img src={UserIcon} alt="login" width={24.96} height={24.96} />
        <StParagraph>로그인</StParagraph>
      </Button>
    </div>
  );
};

export default LoginButton;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45.76px;
  height: 45.76px;
  gap: 1px;
  cursor: pointer;
`;

const StParagraph = styled.p`
  font-size: 12.48px;
  color: ${({ theme }) => theme.colors.gray[300]};
`;
