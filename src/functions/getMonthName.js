const getMonthName = () => {
    const date = new Date();
    let months = ['января', 'февраля', 'марта', 'апреля',
        'мая', 'июня', 'июля', 'августа',
        'сентября', 'октября', 'ноября', 'декабря'];
    return months[date.getMonth()];
}