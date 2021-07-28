const returnDate = () => new Date();

export const getMonthDay = (number) => {
  const date = returnDate();
  date.setDate(date.getDate() + number);
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return `${date.getDate()} ${months[date.getMonth()]}`;
};

export const getWeekDay = (number) => {
  const date = returnDate();
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  if (date.getDay() + number === days.length) {
    return days[0];
  }
  if (date.getDay() + number > days.length) {
    const differ = (date.getDay() + number - days.length) % 7;
    return days[differ];
  }
  return days[date.getDay() + number];
};
