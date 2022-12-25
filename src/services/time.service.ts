export const TimeNowService = async () => {
  const now = new Date();
  return { unix: now.getTime(), utc: now.toUTCString() };
};

export const TimeParService = async (date: string) => {
  const now = date.includes("-")
    ? new Date(date)
    : new Date(Number(date));
  return { unix: now.getTime(), utc: now.toUTCString() };
};
