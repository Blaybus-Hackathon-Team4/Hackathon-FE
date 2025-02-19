export type ReservationRequest = {
  designerId: number; // 디자이너 ID는 숫자
  date: string; // 예약 날짜 (형식: YYYY-MM-DD)
  time: string; // 예약 시간 (형식: HH:mm:ss)
  createdAt: string; // 예약 생성 시간 (형식: ISO 8601)
  isOnline: boolean; // 온라인 여부 (true/false)
};
