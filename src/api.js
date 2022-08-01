const base_url = 'https://api.rawg.io/api/';
const api_key = 'c5eb0c8150ce42acbb0dc64eab05343d';


// getting the date 
const getCurrentMonth = () => {
    const month = new Date().getMonth();
    if (month < 10) {
        return `0${month}`
    } else {
        return month;
    }
}
// getting the day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentMonth}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentMonth}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentMonth}`;

const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesUrl = () => `${base_url}${popular_games}`

