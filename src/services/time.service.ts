export const TimeService = async () => {
  const now = new Date();
  return { unix: now.getTime() , utc: now.toUTCString()};
};
