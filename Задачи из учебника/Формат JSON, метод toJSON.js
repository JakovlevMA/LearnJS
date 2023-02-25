/// 1 /// Преобразуйте объект в JSON, а затем обратно в обычный объект

let user = {
    name: "Василий Иванович",
    age: 35
}
let str = JSON.stringify(user)
console.log(str)
let obj = JSON.parse(str)
console.log(obj)

console.log("=========================================================================================================")
/// 2 /// Исключить обратные ссылки

let room = {
    number: 23
};
let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
}
room.occupiedBy = meetup;
meetup.self = meetup

console.log(JSON.stringify(meetup, function replacer (key, value) {
    console.log (`${key}: ${value}`)
    return (key !== "" && value === meetup) ? undefined : value
}))
