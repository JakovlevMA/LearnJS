/// 1 /// Переприсваивание значений с помощью деструктуризации

let user = { name: "John", years: 30 }
let {name : name, years : age, isAdmin = false} = user
console.log(name)
console.log(age)
console.log(isAdmin)

console.log("=========================================================================================================")
/// 2 /// Вывести сотрудника с максимальной зарплатой

let salaries = {"John": 100, "Pete": 300, "Mary": 250}
let topSalary = (obj) => {
    let max = 0
    let topManager = null;
    for (let [key, value] of Object.entries(obj)) {
       if (max < value) {
          max = value
          topManager = key
       }
    }
    return topManager
}
console.log(topSalary(salaries))