/// 1 /// Сумма зарплат всех сотрудников

let salaries = {"John": 100, "Pete": 300, "Mary": 250};
let sumSalaries = (salaries) => {
   let sum = 0
    for (let salary of Object.values(salaries)){
        sum += salary
    }
    return sum
}

console.log(sumSalaries(salaries))

console.log("=========================================================================================================")
/// 2 /// Вывести длину объекта

let user = {name: 'John', age: 30}
let count = (obj) => {
    return  Object.entries(obj).length
}
console.log(count(user))