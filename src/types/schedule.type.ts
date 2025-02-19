export type ScheduleResponse = {
  availabilityMap: Schedule;
};

export type Schedule = Record<string, boolean>;
