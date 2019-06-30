const getWeekDay = () => {
  const date = new Date();
  let days = ['воскресенье', 'понедельник',
    'вторник', 'среда', 'четверг',
    'пятница', 'суббота'];
  return days[date.getDay()];
}