/// 1 /// Сумма с помощью замыкания

function sum (a) {
   return function (b){
      return a + b
   }
}
console.log(sum(5)(7))

console.log('=========================================================================================================')
/// 2 /// Фильтрация с помощью функции (от значения до значения) и (если есть значения)

let arr = [1, 2, 3, 4, 5, 6, 7]
function inBetween (a, b) {
   return function (x) {
      return x >= a && x <= b
   }
}
console.log((arr.filter(inBetween(3, 6))))

function inArray (array) {
   return function (x) {
      return array.includes(x)
   }
}
console.log(arr.filter(inArray([1, 2, 90])))

console.log('=========================================================================================================')
/// 3 /// Сортировать по полю

let users = [
   { name: "John", age: 20, surname: "Johnson" },
   { name: "Pete", age: 18, surname: "Peterson" },
   { name: "Ann", age: 19, surname: "Hathaway" }
]
function byField (field) {
   return (a, b) => a[field] > b[field] ? 1 : -1
}

users.sort(byField('name'))
users.forEach(user => console.log(user.name))

console.log('=========================================================================================================')
/// 4 /// Порядковый номер стрелков в армии

function makeArmy() {
   let shooters = [];
   for (let i = 0; i <= 1000; i++) {
      let shooter = function() {
         console.log( i )
      };
      shooters.push(shooter)
   }
   return shooters
}
let army = makeArmy()
army[1000]()

console.log('=========================================================================================================')
/// 5 /// Установка и уменьшение значения счётчика

function makeCounter() {
   let count = 0
   function counter () {
      return count++
   }
   counter.set = value => count = value
   counter.decrease = () =>  count--
   return counter
}
let counter = makeCounter()
console.log(counter())
console.log(counter.set(10))
console.log(counter.decrease())
console.log(counter())
console.log(counter())

console.log('=========================================================================================================')
/// 6 /// Результат сложения на каждую итерацию

function sum2 (a) {
   return function next (b) {
    console.log(a = a + b)
    return next
   }
}
sum2(5)(7)(6)(8)