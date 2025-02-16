import { addDays, getDate } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import "../../styles/custom-datepicker.css";

const morning = ["10:00", "10:30", "11:00", "11:30"];
// prettier-ignore
const afternoon = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",]

const SelectDatePage = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const today = new Date(); // 오늘 날짜

  return (
    <DateAndTime>
      <DatePicker
        inline // 인풋 필드 제거하고 달력만 표시
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        shouldCloseOnSelect={false}
        dateFormat="yyyy.MM" // 날짜 형식
        minDate={today} // 오늘 이후만 선택 가능
        maxDate={addDays(today, 90)}
        locale={ko} // 한국어 로케일
        dayClassName={(date) =>
          getDate(date) < Math.random() * 31 ? "random" : ""
        }
      />
      <TimeSection>
        <TimeBox>
          <Text>오전</Text>
          <TimeList>
            {morning.map((time) => (
              <TimeButton key={time}>{time}</TimeButton>
            ))}
          </TimeList>
        </TimeBox>
        <TimeBox>
          <Text>오후</Text>
          <TimeList>
            {afternoon.map((time) => (
              <TimeButton key={time}>{time}</TimeButton>
            ))}
          </TimeList>
        </TimeBox>
      </TimeSection>
      <NextButton>다음</NextButton>
    </DateAndTime>
  );
};

export default SelectDatePage;

const DateAndTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TimeSection = styled.section`
  padding: 0 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Text = styled.p`
  color: #666666;
`;

const TimeList = styled.div`
  display: grid; /* Grid 레이아웃 사용 */
  grid-template-columns: repeat(4, 1fr); /* 1줄에 버튼 4개 */
  column-gap: 8px;
  row-gap: 12px;
  /* border: 1px solid black; */
`;

const TimeButton = styled.button`
  width: 81.5px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  background-color: white;
`;

const NextButton = styled.button`
  margin: 0 20px 20px 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  font-weight: bold;
  border: none;
  width: 350px;
  height: 48px;
  align-self: center;
`;
