import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GetJwtToken } from "../../../api/login.api";
import "../../../styles/google-login.css";
import { useUserStore } from "../../../zustand/user.store";

interface GoogleJwtPayload extends JwtPayload {
  name?: string;
  email?: string;
}

const LoginButton = () => {
  const navigate = useNavigate();
  const { setLogin } = useUserStore();

  const successLogin = async (credentialResponse: CredentialResponse) => {
    const decodingData = jwtDecode<GoogleJwtPayload>(
      credentialResponse.credential as string
    );
    const { name, email } = decodingData;
    try {
      const data = await GetJwtToken(email as string, name as string);
      setLogin(name as string, email as string);
      sessionStorage.setItem("accessToken", data.jwt); // JWT 토큰 저장
      navigate("/"); // 로그인 후 홈으로 이동
    } catch (error) {
      console.error("JWT 토큰 가져오기 실패", error);
    }
  };

  const failedLogin = () => {
    console.log("Login Failed");
  };

  return (
    <StDiv>
      {/* <Button id="login-icon">
        <img src={UserIcon} alt="login" width={24.96} height={24.96} />
        <StParagraph>로그인</StParagraph>
      </Button> */}
      <GoogleLogin
        onSuccess={successLogin}
        onError={failedLogin}
        width="0px"
        logo_alignment="center"
        size="large"
        // type="icon"
        containerProps={{
          id: "google-login-button", // id 속성 추가
          className: "my-custom-class", // 클래스 추가
          style: {
            width: "45px",
            height: "40px",
          }, // 스타일 추가
        }}
      />
    </StDiv>
  );
};

export default LoginButton;

const StDiv = styled.div`
  position: relative;
`;

// const Button = styled.div`
//   position: absolute;
//   background-color: white;
//   right: 0;
//   /* z-index: 500; */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 45.76px;
//   height: 45.76px;
//   gap: 1px;
//   cursor: pointer;
// `;

// const StParagraph = styled.p`
//   font-size: 12.48px;
//   color: ${({ theme }) => theme.colors.gray[300]};
// `;
