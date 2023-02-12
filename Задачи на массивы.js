///1
let newArr = [];
let start = 1
while (start <= 3){
    newArr.push('a')
    start++
}
console.log(newArr)

console.log ('========================================================================================================')
/// 2
let newArr2 = [1, 2, 3]
newArr2.reverse()
console.log(newArr2)
console.log ('========================================================================================================')
/// 3
let array =  [0, 1, false, 2, undefined, '', 3, null, 'a', -0.2, {}, []]
let newToArr = array.filter(item => item > 0 || item === Array || item < 0 || (typeof item === 'string' && item !== '') ||
    (typeof item === 'object' && item !== null))
console.log(newToArr)

console.log ('========================================================================================================')
/// 4
let arrayOfObject = [['a', 1], ['b', 2]]
console.log(Object.fromEntries(arrayOfObject))
console.log ('========================================================================================================')

/// 5
let minArray = [1, 2, 3, 1, 2, 2, 1]
let onceElem = (arr) => {
    return arr.filter (item => arr.indexOf(item) === arr.lastIndexOf(item))
}
console.log(onceElem(minArray))

console.log ('========================================================================================================')
/// 6

let array2 = [1, 2, 3, 1, 2]
let result = (array) => {
    let set = new Set (array)
    let newArr3 = []
    set.forEach((val, values, set) => {newArr3.push(val)})
    return newArr3
}
console.log(result(array2))

console.log ('========================================================================================================')
/// 7

let array7 = [1, 2, 3]
let array77 = [1, 2, 3]
let resultComparison;
let comparison = (arr1, arr2) => {
    if (JSON.stringify (arr1) !== JSON.stringify (arr2)) {
        resultComparison = false
    } else {
        resultComparison = true
    }
    return resultComparison
}
console.log(comparison(array7, array77))

console.log ('========================================================================================================')
/// 8

let arr8 = [[1, 2, [3, 4, [5]]]]
let result2
let oneDimensionalArr = (arr) => {
    result2 = arr8.flat(Infinity)
    return result2
}
console.log(oneDimensionalArr(arr8))

console.log ('========================================================================================================')
/// 9

let arr9 = []
let arr99 = []
let DubleArr = (array, step) => {
    while (array.length) {
        arr9 = array.splice(0, step)
        arr99.push(arr9)
    }
    return arr99
}
console.log(DubleArr([1, 2, 3, 4, 5, 6, 7], 2))

console.log ('========================================================================================================')
/// 10

let arr10 = [[1, 2], [2, 3],]
let miracle = (arr) => {
    let result = arr.flat(Infinity)
    let result2 = result.filter (item => result.indexOf(item) !== result.lastIndexOf(item))
    for (let i = 0; i < result2.length; i++) {
        if (result2.indexOf(i) === result2.lastIndexOf(i)){
            result2.pop(i)
        }
    }
    return result2
}
console.log(miracle(arr10))

//Hi
