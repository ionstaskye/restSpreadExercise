const filterOutOdds = (...nums) => nums.filter((num) =>  num % 2 === 0)

const findMin = (...val)    => val.reduce((min, num)    => min < num ? min: num)

const mergeObjects = (objOne, objTwo) => {
    return ({...objOne, ...objTwo})
}

const doubleAndReturnArgs = (arr,...val)    => {
    const newArray = [...arr, ...val]
    return newArray.map((num)  => num*2)
}
const removeRandom = items    => {
    let deleted = Math.floor(Math.random()*items.length)
    return [...items.slice(0,deleted),...items.slice(deleted+1)]
}
const extend = (array1,array2) =>   {
    return [...array1, ...array2]
}
const addKeyVal = (obj, key, val)   =>{
    let newObj = {...obj}
    newObj.key = val
    return newObj
}
const removeKey = (obj, key) =>    {
    let newObj = {...obj}
    delete newObj[key]
    return newObj
}
const combine = (obj1, obj2)   =>{
    return{...obj1, ...obj2}
}
const update = (obj, key, val)   =>{
    let newObj = {...obj}
    newObj[key] = val
    return newObj
}