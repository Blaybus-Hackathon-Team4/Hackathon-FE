import { addDays } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import "../../styles/custom-datepicker.css";
import BackHeader from "../designerDetail/components/BackHeader";
import { useLocation, useNavigate } from "react-router";
import { Process } from "../selectProcess/SelectProcessPage";

const morning = ["10:00", "10:30", "11:00", "11:30"];
// prettier-ignore
const afternoon = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00",]

const SelectDatePage = () => {
  const location = useLocation();
  const selectedProcess = location.state as Process | null; // 이전 페이지에서 받은 대면/비대면 값

  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | null>(null); // 선택된 날짜
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  ); // 현재 달력에서 표시 중인 월

  const today = new Date(); // 오늘 날짜

  const getDayClassName = (date: Date, startDate: Date | null) => {
    const classes = [];

    if (startDate) {
      const isSameDay =
        date.getFullYear() === startDate.getFullYear() && // 연도 비교
        date.getMonth() === startDate.getMonth() && // 월 비교
        date.getDate() === startDate.getDate(); // 일 비교

      if (isSameDay) {
        classes.push("react-datepicker__day--selected");
      }

      // 현재 선택된 월과 다른 월에 있지만 같은 날짜인 경우 remove 클래스 추가
      const isSameDateDifferentMonth =
        date.getDate() === startDate.getDate() &&
        date.getMonth() !== currentMonth;

      if (isSameDateDifferentMonth) {
        classes.push("remove");
      }
    }

    // 현재 달력의 월과 다른 날짜에 `faded` 추가
    if (date.getMonth() !== currentMonth) {
      classes.push("faded");
    }

    // 일요일 스타일
    if (date.getDay() === 0) {
      classes.push("sunday");
    }

    return classes.join(" ");
  };

  return (
    <>
      <BackHeader />
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
          dayClassName={(date) => getDayClassName(date, startDate)}
          onMonthChange={(date) => setCurrentMonth(date.getMonth())} // 달력의 월이 변경될 때 상태 업데이트
          // renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          //   <div className="custom-header">
          //     <button onClick={decreaseMonth}>&lt;</button>
          //     <span>{`${date.getFullYear()}.${String(
          //       date.getMonth() + 1
          //     ).padStart(2, "0")}`}</span>
          //     <button onClick={increaseMonth}>&gt;</button>
          //   </div>
          // )}
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
        <ButtonBox>
          <NextButton
            onClick={() =>
              navigate("/payment/1", {
                state: { selectedProcess, currentMonth, startDate }, // 결제페이지로 정보 넘기기, 시간 정보 추가해야함
              })
            }
          >
            예약하기
          </NextButton>
        </ButtonBox>
      </DateAndTime>
    </>
  );
};

export default SelectDatePage;

const DateAndTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 28px;
`;

const TimeSection = styled.section`
  padding: 0 20px;
  max-width: 480px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const Text = styled.p`
  color: #666666;
`;

const TimeList = styled.div`
  display: grid; /* Grid 레이아웃 사용 */
  grid-template-columns: repeat(4, 1fr); /* 1줄에 버튼 4개 */
  place-items: center;
  column-gap: 8px;
  row-gap: 12px;
  width: 100%;
`;

const TimeButton = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: white;
`;

const ButtonBox = styled.div`
  padding: 20px;
  display: flex;
`;

const NextButton = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  font-weight: bold;
  border: none;
  width: 100%;
  height: 48px;
`;
