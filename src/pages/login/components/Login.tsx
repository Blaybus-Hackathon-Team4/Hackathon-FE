import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import styled from "styled-components";

const Login = () => {
  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      console.log("인증 코드: ", codeResponse.code);

      try {
        // 백엔드로 인증 코드 전송 (나중에 API 파일로 빼기)
        const res = await axios.post(
          "http://localhost:8080/login/oauth2/code/google",
          {
            code: codeResponse.code,
          }
        );
        const data = res.data;
        console.log("백엔드 응답: ", data);

        // 액세스 토큰을 사용하여 사용자 정보 가져오기
        const userInfo = await axios.get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${data.access_token}`
        );
        const userData = userInfo.data;
        console.log("사용자 정보: ", userData);

        // 로컬 스토리지에 액세스 토큰 저장 (data.accessToken이 맞는지 확인해야 함)
        localStorage.setItem("accessToken", data.access_token);
      } catch (error) {
        console.error("요청 실패: ", error);
      }
    },
    onError: () => console.log("로그인 실패"),
  });

  return (
    <Button onClick={login}>
      <img src="/user.svg" alt="login" width={24.96} height={24.96} />
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
