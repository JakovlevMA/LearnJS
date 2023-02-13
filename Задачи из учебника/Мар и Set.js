/// 1 /// Кол-во уникальных значений в массиве

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"]
let unique = (arr) => {
    return Array.from(new Set(arr))
}
console.log(unique(values))

console.log("=========================================================================================================")
/// 2 /// Уникальные анограммы

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
let aclean = (arr1) => {
    let map = new Map()
    for (let words of arr1) {
        let sortVal = words.toLowerCase().split("").sort().join("")
        map.set(sortVal, words)
    }
    return Array.from(map.values())
}
console.log(aclean(arr))


