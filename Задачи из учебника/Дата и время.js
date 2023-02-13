/// 1 /// Дата : 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

let date = new Date(2012, 1, 20, 3, 12,)
console.log(date)

console.log("=========================================================================================================")
/// 2 /// День недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС»

let date2 = new Date(2012, 0, 3)
let getWeekDay = (date2) => {
    let day = ['ВС' ,'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return day[date2.getDay()]
}
console.log(getWeekDay(date2))

console.log("=========================================================================================================")
/// 3 /// День недели в европейской нумерации от 1 до 7

let date3 = new Date(2012, 0, 3)
let getLocalDay = (date) => {
    let day = date.getDay()
    if (day === 0){
        day = 7
    }
    return day
}
console.log(getLocalDay(date3))

console.log("=========================================================================================================")
/// 4 /// Какой день месяца был много дней назад? Не изменяя date

let date4 = new Date(2015, 0, 2)
let getDateAgo = (date, days) => {
    let cloneDate = new Date(date)
    cloneDate.setDate(date.getDate() - days)
    return cloneDate.getDate()
}
console.log(getDateAgo(date4, 5))

console.log("=========================================================================================================")
/// 5 /// Последнее число месяца?, включая високосный год 28/29

let getLastDayOfMonth = (year, month) => {
    let date5 = new Date(year, month + 1, 0)
    return date5.getDate()
}
console.log(getLastDayOfMonth(2012, 1))

console.log("=========================================================================================================")
/// 6 /// Сколько сегодня прошло секунд?

let getSecondsToday = () => {
    let result
    let nowTime = new Date()
    let today = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate())
    let difference = ((nowTime - today) / 1000)
    result = Math.round(difference)
    return result
}
console.log(getSecondsToday())

console.log("=========================================================================================================")
/// 7 /// Количество секунд до завтрашнего дня

let getSecondsToTomorrow = () => {
    let result;
    let nowTime = new Date()
    let tomorrow = new Date(nowTime.getFullYear(), nowTime.getMonth(), nowTime.getDate()+1)
    let difference = ((tomorrow - nowTime) / 1000)
    result = Math.round(difference)
    return result
}
console.log(getSecondsToTomorrow())

console.log("=========================================================================================================")
/// 8 /// Форматирование относительной даты
let formatDate = (date) => {
    let now = new Date()
    let difference = (now - date) / 1000

    if (difference <= 1){
        return 'Прямо сейчас'
    } else if (difference <= 30) {
        return `${difference} секунд назад`
    } else if (difference <= 3600) {
        return `${difference / 60} минут назад`
    }
    let format = (a) => a < 10? ('0' + a) : a

    let year = format(date.getFullYear() % 100)
    let month = format(date.getMonth() + 1)
    let day = format(date.getDay())
    let hours = format(date.getHours())
    let minutes = format(date.getMinutes())
    return `${day}.${month}.${year} ${hours}:${minutes}`
}
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)))
