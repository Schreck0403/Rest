//es5 functin that takes a cariable number of arguments
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

//es2015 function that takes a variable number of arguments
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

//findMin
const findMin = (...args) => Math.min(...args)

//mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//doubleandreturnargs
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

//slice and dice

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }
  
  
  const addKeyVal = (obj, key, val) => {
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  }

  const removeKey = (obj, key) => {
  
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  }
  
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }  
  const update = (obj, key, val) => {
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  }