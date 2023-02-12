/// (1)
let objectOrNot = {a: 1}
let isMassiveOrNot = [ ];
function metod(obj) {
    if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
        return console.log (true)
    } else {
        return console.log (false)
    }
}
metod(objectOrNot);
/// (2)
console.log("===============================================================================================================")
let darksMassive = {a: 1, b: 2};
function metod2(objectInMassive) {
    let result = [];
    for (let key in objectInMassive) {
        if (objectInMassive.hasOwnProperty(key)) {
            result.push([key,objectInMassive[key]]);
        }
    }
    return result;
};
console.log(metod2(darksMassive))
/// (3)
console.log("===============================================================================================================")

let obj = {a: 1, b: 2}
Reflect.deleteProperty(obj, 'b')
console.log(obj)

/// (4)
console.log("===============================================================================================================")
let object = {a: undefined};
function metod4(emptyObject) {
    for (let key in emptyObject) {
        if (emptyObject[key] === undefined) {
            return console.log (true)
        } else {
            if (emptyObject.hasOwnProperty(key))
                return console.log (false)
        }
    }
    return console.log (true)
}
metod4(object)
//(5)///
console.log("===============================================================================================================")
let object1 = {a: 1, b: 2}
let object2 = {a: 1, c: 2}

function metod5(firstObj, secondObj) {
    let firstObjKey = Object.keys(firstObj)
    let secondObjKey = Object.keys(secondObj)

    if (firstObjKey.length !== secondObjKey.length) {
        return console.log(false)
    }
    for (let key in firstObj) {
        if (firstObj.hasOwnProperty(key) && (firstObj[key] !== secondObj[key]))
            return console.log(false)
    }
    return console.log(true)
}
metod5(object1, object2)
/// (6)
console.log("===============================================================================================================")

let object4 = { a: { b: [1, 2, 3] } }
function metod6(newObject1, a, b){
    let result2 = [];
    for (let key in newObject1){
        for (let key2 in newObject1[key]){
            for (let i = 0; i < newObject1[key][key2].length; i++){
                result2.push(newObject1[key][key2][a])
                result2.push(newObject1[key][key2][b])
                return result2

            }
        }
    }
}

console.log(metod6(object4, 1, 2))


console.log("===============================================================================================================")
/// (7)
let newEmptyObject = [{a: undefined}]
function metod7(emptyObj) {
    if (emptyObj === null) {
        return true
    }
    if (Array.isArray(emptyObj)) {
        if (emptyObj.length === 0) {
            return true
        }
        let result;
        for (let i = 0; i < emptyObj.length; i++) {
            if (typeof emptyObj[i] === 'boolean' || (typeof emptyObj[i] === 'number' && !Number.isNaN(emptyObj[i])) ||
                (typeof emptyObj[i] === 'string' && emptyObj[i] !== '')) {
                result = false
                break;
            }
            if (Array.isArray(emptyObj[i]) || (typeof emptyObj[i] === 'object' && emptyObj[i] !== null)) {
                result = metod7(emptyObj[i])
                break;
            }
            result = true
        }
        return result
    }
    if (typeof emptyObj === 'object') {
        let emptyObjKey = Object.keys(emptyObj)
        if (emptyObjKey.length === 0) {
            return true
        }
        let result;
        for (let i = 0; i < emptyObjKey.length; i++) {
            let value = emptyObj[emptyObjKey[i]];

            if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value)) ||
                (typeof value === 'string' && value !== '')) {
                result = false;
                break;
            }
            if (Array.isArray (value) || (typeof value === 'object' && value !== null)) {
                result = metod7(value);
                break;
            }
            result = true
        }
        return result
    }
}
console.log (metod7(newEmptyObject))
console.log("===============================================================================================================")
/// (8)
let prototypeObj1 = { a: 1, b: { c: 1 } }
let prototypeObj2 = {b: { c: 1 }, a: 1}

let metod8 = (test1, test2) => {
    let firstArrayKeys = Object.keys(test1)
    let secondArrayKeys = Object.keys(test2)
    if (firstArrayKeys.length === 0 && secondArrayKeys.length === 0) {
        return true
    }
    let compare = firstArrayKeys.map((key) => {
        let valueFirstObj = test1[key];
        let valueSecondObj = test2[key];
        if ((Number.isNaN(valueFirstObj) && Number.isNaN(valueSecondObj))
            || (valueFirstObj === null && valueSecondObj === null)) {
            return true
        }
        if (valueFirstObj === valueSecondObj) {
            return true
        }
        if (Array.isArray(valueFirstObj) && Array.isArray(valueSecondObj)){
            return metod8(valueFirstObj, valueSecondObj)
        }
        if (typeof valueFirstObj === 'object' && typeof valueSecondObj === 'object') {
            return metod8 (valueFirstObj, valueSecondObj)
        }
        return false
    })
    return !compare.includes(false) && !compare.includes(undefined)
}
let isArrEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length){
        return false
    }
    let compareded = arr1.map((elem, loc) => {
        if (Array.isArray(elem) && Array.isArray(arr2[loc])) {
            return metod8(elem, arr2[loc])
        }
        if (typeof elem === 'object' && typeof arr2[loc] === 'object'){
            return metod8(elem, arr2[loc])
        }
        return arr2[loc] === elem;
    })
    return !compareded.includes(false)
}

console.log(metod8(prototypeObj1, prototypeObj2))

console.log("===============================================================================================================")
/// (9)
let objectNomber1 = {c: 5, c: 3, o: 0, h: 7}
let objectNomber2 = {c: 3, h: 7, o: 9, u: 7}

let metod9 = (obj1, obj2) => {
    let keyInObj1 = Object.keys(obj1);
    let keyInObj2 = Object.keys(obj2);
    let key;

    for (let i = 0; i<keyInObj1.length; i++){
        for (let ii = 0; ii<keyInObj2.length; ii++){

            if (keyInObj1[i] === keyInObj2[ii] && obj1[keyInObj1[i]] === obj2[keyInObj2[ii]]){
                key = keyInObj1[i];
            }
        }
    }
    for (let keyDel in obj1) {
        if (keyDel !== key) {
            delete obj1[keyDel];
        }
    }
    return obj1;
}


console.log(metod9(objectNomber1, objectNomber2))
console.log("===============================================================================================================")

let objectNom1 = { a: 1, b: { c: 3 }, o: 9 }
let objectNom2 = { i: { c: 5 }, c: 1, b: {c: 3} }
/// 10
let metod10 = (obj1, obj2) => {
    let keyInObj1 = Object.keys(obj1);
    let keyInObj2 = Object.keys(obj2);
    let key;

    for (let i = 0; i<keyInObj1.length; i++){
        for (let ii = 0; ii<keyInObj2.length; ii++){

            if (keyInObj1[i] === keyInObj2[ii] && ((typeof obj1[keyInObj1[i]] === typeof obj2[keyInObj2[ii]]) &&
                JSON.stringify(obj1[keyInObj1[i]]) === JSON.stringify(obj2[keyInObj2[ii]]))){
                key = keyInObj1[i];
            }
        }
    }
    for (let keyDel in obj1) {
        if (keyDel !== key) {
            delete obj1[keyDel];
        }
    }
    return obj1;
}

console.log(metod10(objectNom1, objectNom2))