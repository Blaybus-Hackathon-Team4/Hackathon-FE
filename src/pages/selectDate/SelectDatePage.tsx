import { useMutation, useQuery } from "@tanstack/react-query";
import { addDays, format } from "date-fns";
import { ko } from "date-fns/locale";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { ReserveConsulting } from "../../api/reservation.api";
import { GetDesignerSchedule } from "../../api/schedule.api";
import "../../styles/custom-datepicker.css";
import { Schedule, ScheduleResponse } from "../../types/schedule.type";
import { useReservationStore } from "../../zustand/reservation.store";
import BackHeader from "../designerDetail/components/BackHeader";

const temp_morning = ["10:00", "10:30", "11:00", "11:30"];
// prettier-ignore
const temp_afternoon = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"]

const SelectDatePage = () => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState<Date | null>(null); // 선택된 날짜
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  ); // 현재 달력에서 표시 중인 월
  const [formattedDate, setFormattedDate] = useState<string>("");

  const [morning, setMorning] = useState<TimeSlot[]>([]);
  const [afternoon, setAfternoon] = useState<TimeSlot[]>([]);

  const [selectedTime, setSelectedTime] = useState<string | null>(null); // 선택된 시간

  const today = new Date(); // 오늘 날짜

  const { designerId, process } = useReservationStore();

  type TimeSlot = {
    [key: string]: boolean; // 키는 문자열, 값은 boolean
  };

  const { data: validReservationDate } = useQuery<
    ScheduleResponse,
    Error,
    Schedule
  >({
    queryKey: ["date", designerId, formattedDate],
    queryFn: async () => await GetDesignerSchedule(designerId!, formattedDate),
    enabled: designerId !== null && !!formattedDate,
    refetchOnWindowFocus: false, // 다른 창을 봤다가 다시 현재 브라우저에 포커스 했을 때 리페칭을 막음
    select: (data) => data.availabilityMap,
  });

  console.log(validReservationDate);

  useEffect(() => {
    if (validReservationDate && Array.isArray(validReservationDate)) {
      const morningSlots = validReservationDate.slice(0, 4); // 앞 4개
      const afternoonSlots = validReservationDate.slice(4); // 나머지

      setMorning(morningSlots);
      setAfternoon(afternoonSlots);
    }
  }, [validReservationDate]);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date);
      const formatted = format(date, "yyyy-MM-dd");
      setFormattedDate(formatted);
    }
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
  };

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

  const { mutate: reserveConsulting } = useMutation({
    mutationFn: ReserveConsulting,
    onSuccess: (data) => {
      console.log("예약 성공: ", data);
      navigate(`/payment/${designerId}`);
    },
    onError: (error) => {
      console.log("예약 실패: ", error);
    },
  });

  const handleReservation = () => {
    if (!startDate || !selectedTime) return;

    reserveConsulting({
      designerId: Number(designerId!),
      date: formattedDate,
      time: selectedTime,
      createdAt: new Date().toISOString(),
      isOnline: process === "비대면",
    });
  };

  return (
    <>
      <BackHeader />
      <DateAndTime>
        <DatePicker
          inline // 인풋 필드 제거하고 달력만 표시
          selected={startDate}
          onChange={handleDateChange}
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
            {morning.length > 0 ? (
              <TimeList>
                {morning.map((item) => {
                  const [time, isValidReservation] = Object.entries(item)[0];
                  return (
                    <TimeButton
                      key={time}
                      $disabled={!isValidReservation}
                      $selected={selectedTime === time}
                      disabled={!isValidReservation}
                      onClick={() => handleTimeChange(time)}
                    >
                      {time}
                    </TimeButton>
                  );
                })}
              </TimeList>
            ) : (
              <TimeList>
                {temp_morning.map((time) => (
                  <TimeButton key={time} disabled $disabled>
                    {time}
                  </TimeButton>
                ))}
              </TimeList>
            )}
          </TimeBox>
          <TimeBox>
            <Text>오후</Text>
            {afternoon.length > 0 ? (
              <TimeList>
                {afternoon.map((item) => {
                  const [time, isValidReservation] = Object.entries(item)[0];
                  return (
                    <TimeButton
                      key={time}
                      $disabled={!isValidReservation}
                      $selected={selectedTime === time}
                      disabled={!isValidReservation}
                      onClick={() => handleTimeChange(time)}
                    >
                      {time}
                    </TimeButton>
                  );
                })}
              </TimeList>
            ) : (
              <TimeList>
                {temp_afternoon.map((time) => (
                  <TimeButton key={time} disabled $disabled>
                    {time}
                  </TimeButton>
                ))}
              </TimeList>
            )}
          </TimeBox>
        </TimeSection>
        <ButtonBox>
          <NextButton
            $disabled={!startDate || !selectedTime}
            disabled={!startDate || !selectedTime}
            onClick={handleReservation}
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

const TimeButton = styled.button<{ $disabled?: boolean; $selected?: boolean }>`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme, $disabled, $selected }) =>
      $disabled
        ? theme.colors.gray[100]
        : $selected
        ? theme.colors.primary[500]
        : theme.colors.gray[200]};
  color: ${({ theme, $disabled, $selected }) =>
    $disabled
      ? theme.colors.gray[200]
      : $selected
      ? theme.colors.primary[500]
      : theme.colors.gray[900]};
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.primary[50] : "white"};
  font-weight: ${({ $selected }) => $selected && "bold"};
  &:hover {
    cursor: ${({ $disabled }) => $disabled && "not-allowed"};
  }
`;

const ButtonBox = styled.div`
  padding: 20px;
  display: flex;
`;

const NextButton = styled.button<{ $disabled?: boolean }>`
  border-radius: 8px;
  background-color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.gray[100] : theme.colors.primary[500]};
  color: ${({ theme, $disabled }) =>
    $disabled ? theme.colors.gray[300] : "white"};
  font-weight: bold;
  border: none;
  width: 100%;
  height: 48px;
  &:hover {
    cursor: ${({ $disabled }) => $disabled && "not-allowed"};
  }
`;
