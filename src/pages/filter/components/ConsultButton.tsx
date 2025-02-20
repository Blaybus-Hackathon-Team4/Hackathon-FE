import styled from "styled-components";
import { theme } from "../../../styles/theme";
import faceToFaceIcon from "../../../assets/icons/face-to-face-icon.svg"; 
import nonFaceToFaceIcon from "../../../assets/icons/non-face-to-face-icon.svg"; 

interface ConsultButtonProps {
  type: "대면" | "비대면";
  isSelected: boolean;
  onClick: () => void;
}

const ConsultButton = ({ type, isSelected, onClick }: ConsultButtonProps) => {
  const imageSrc = type === "대면" ? faceToFaceIcon : nonFaceToFaceIcon;

  return (
    <StyledButton isSelected={isSelected} onClick={onClick}>
      <IconWrapper>
        <Icon src={imageSrc} alt={type} />
      </IconWrapper>
      <Text isSelected={isSelected}>{type}</Text>
    </StyledButton>
  );
};

export default ConsultButton;

// ✅ 버튼 스타일 수정
const StyledButton = styled.button<{ isSelected: boolean }>`
  width: 167px;
  height: 175px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 10px;

  //* ✅ 기본 상태 (처음 페이지 진입 시 선택되지 않음) */
  border: 1px solid ${theme.colors.gray[300]};
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[300]};
  font-weight: medium;

  /* ✅ 버튼이 선택된 경우 */
  ${({ isSelected }) =>
    isSelected &&
    `
    border: 1px solid ${theme.colors.primary[500]};
    background-color: ${theme.colors.primary[50]};
    color: ${theme.colors.primary[500]};
    font-weight: bold;
  `}
`;

const IconWrapper = styled.div`
  position: absolute;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
`;

const Icon = styled.img`
  width: 108px;
  height: 112px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const Text = styled.span<{ isSelected: boolean }>`
  position: absolute;
  bottom: 10px;
  color: ${({ isSelected }) =>
    isSelected ? theme.colors.primary[500] : theme.colors.gray[300]};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "medium")};
  font-size: 14px;
`;
