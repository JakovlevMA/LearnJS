/// 1 /// Вычислить сумму чисел до данного (100)
let sum = (a) => {
    let sum = 0
    for (let i = 0; i <= 100; i++) {
        sum = sum + i
    }
    return sum
}
console.log(sum(100))

let sum2 = (b) => {
    if (b === 0) {
        return b
    } else {
        return b + sum2(b - 1)
    }
}
console.log(sum2(100))

let sum3 = (c) => {
    return c * (c + 1) / 2
}

console.log(sum3(100))

console.log('=========================================================================================================')
/// 2 ///  Вычислить факториал

let fact = (a) => {
    if (a === 1) {
        return a
    } else {
        return a * fact(a - 1)
    }
}
console.log(fact(5))

console.log('=========================================================================================================')
/// 3 /// Числа Фибоначчи

let fib = (n) => {
    if (n <= 1) {
        return n
    } else {
       return fib(n - 1) + fib(n - 2)
    }
}
console.log(fib(10))

console.log('=========================================================================================================')
/// 4 /// Вывод односвязного списка

let list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}}

function printList(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}
printList(list)

let printList1 = (list) => {
    console.log(list.value)
    if (list.next){
        printList1(list.next)
    }
}
printList1(list)

console.log('=========================================================================================================')
/// 5 /// Вывод односвязного списка в обратном порядке
let printList2 = (list) => {
    if (list.next){
        printList2(list.next)
    }
    console.log(list.value)
}
printList2(list)