import React from "react";
import {theme} from "../../../styles/theme";
import styled from "styled-components";

interface PriceInputProps {
  value: string;
  onChange: (value: string) => void;
}

// const formatPrice = (value: string) => {
//     // 숫자만 추출하고 천 단위로 콤마 추가
//     const numericValue = value.replace(/\D/g, "");
//     return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
// };

const PriceInput = ({ value, onChange }: PriceInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, ""); // 숫자만 추출
    onChange(inputValue ? String(Number(inputValue)) : "0"); // 숫자로 변환 후 문자열 처리
};

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
        if (value.endsWith("원")) {
            const newValue = value.slice(0, -1).replace(/\D/g, ""); // 숫자만 남기기
            onChange(newValue ? String(Number(newValue)) : "0");
            e.preventDefault(); // 기본 Backspace 동작 방지
        }
    }
    };
  
    return (
      <InputContainer>
        <DisabledInput>20,000원</DisabledInput>
        <Dash>-</Dash>
        <StyledInput
          type="text"
          placeholder="최대 금액"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </InputContainer>
    );
};

export default PriceInput;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  //border: 1px solid;
  border-radius: 10px;
  //width: 100%;
`;

const DisabledInput = styled.div`
  width: 163px;
  height: 40px;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  color: ${theme.colors.gray[300]};
  font-weight: light;
`;

const Dash = styled.span`
  font-size: 16px;
`;

const StyledInput = styled.input`
  width: 163px;
  height: 40px;
  border: 1px solid ${theme.colors.gray[300]};
  padding-left: 10px;
  border-radius: 10px;

  &:focus {
    border: 1px solid ${theme.colors.black}; // ✅ 클릭 시 border 두께는 그대로, 색상만 변경
    outline: none;
  }
`;