import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import styled from "styled-components";

import axios from "axios";
import UserIcon from "../../../assets/icons/user.svg";

const Login = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      console.log("인증 코드: ", codeResponse.code);

      try {
        // 백엔드로 인증 코드 전송 (나중에 API 파일로 빼기)
        const res = await axios.get(
          "http://43.202.67.52:8080/oauth2/code/google"
          //   {
          //   params: {
          //     // code: codeResponse.code,
          //     redirect_uri: "http://localhost:5173/oauth/callback",
          //   },
          // }
        );
        const data = res.data;
        console.log("백엔드 응답: ", data);

        // // 로컬 스토리지에 액세스 토큰 & 사용자 정보 저장
        // localStorage.setItem("accessToken", data.access_token);
        // localStorage.setItem("refreshToken", data.refresh_token); // 리프레시 토큰 저장 (필요 시)
        // localStorage.setItem("user", JSON.stringify(data.user)); // 사용자 정보 저장

        // 로그인 성공 후 콜백 페이지로 이동 -> 홈으로 이동하나??
        navigate("/oauth/callback");
      } catch (error) {
        console.error("요청 실패: ", error);
      }
    },
    onError: () => console.log("로그인 실패"),
  });

  return (
    <Button onClick={login}>
      <img src={UserIcon} alt="login" width={24.96} height={24.96} />
      <StParagraph>로그인</StParagraph>
    </Button>
  );
};

export default Login;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45.76px;
  height: 45.76px;
  gap: 1px;
`;

const StParagraph = styled.p`
  font-size: 12.48px;
  color: ${({ theme }) => theme.colors.gray[300]};
`;
