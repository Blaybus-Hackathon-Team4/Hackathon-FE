import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { theme } from "../../../styles/theme";
//import bottomArrow from "../../assets/icons/bottom-arrow-gray.svg";

const bottomArrow = "/bottom-arrow-gray.svg"; // public 폴더 내 정적 파일 접근

interface FilterButtonProps {
  label: string;
  onClick?: () => void;
}

const FilterButton = ({ label }: FilterButtonProps) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleClick = () => {
    navigate("/filter", { state: { filterType: label } }); // 클릭 시 필터 페이지로 이동
  };
  
  return (
    <Button onClick={handleClick}>
      {label}
      <ArrowIcon src={bottomArrow} alt="arrow" />
    </Button>
  );
};

export default FilterButton;

const Button = styled.button`
  flex-grow: 1;
  text-align: center;
  justify-content:center;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  font-size: 15px;
  color: ${theme.colors.gray[200]};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: 25px;
  cursor: pointer;
  min-width:80px;
`;

const ArrowIcon = styled.img`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
`;