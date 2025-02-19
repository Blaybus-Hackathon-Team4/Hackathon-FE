import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GetUserData } from "../../../api/login.api";
import UserIcon from "../../../assets/icons/user.svg";
import { useUserStore } from "../../../zustand/user.store";

const LoginButton = () => {
  const navigate = useNavigate();
  const { setLogin } = useUserStore();

  // Google 로그인 성공 시 실행되는 함수
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("구글 로그인 성공", response);
      // 액세스 토큰 로컬 스토리지에 저장
      localStorage.setItem("accessToken", response.access_token);
      // 액세스 토큰을 서버에 보내서 사용자 정보를 가져옴 -> 아이디 토큰이랑 액세스 토큰 다른가?
      const userData = await GetUserData(response.access_token);
      setLogin(userData.email, userData.name);
      navigate("/"); // 예시: 홈 페이지로 이동
    },
    onError: () => {
      console.error("구글 로그인 실패");
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
