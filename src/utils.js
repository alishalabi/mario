const sayHello = () => {
  console.log("Hello")
}

export default sayHello

const printWithSpace = (array) => {
  let newString = ""
  for (let i = 0; i < array.length; i++) {
    newString = newString.concat(array[i] + " ")
  }
  console.log(newString)
}

const printArray = (arr) => {
  console.log(arr.join(' '))
}

const print2dArray = (arr) => {
  for(let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      printArray(arr[i])
    } else {
      console.log(arr[i])
    }
  }
  console.log()
}

print2dArray([[1,2,3], [4,5,6], [7,8,9]])
// print2dArray([1,2,3,4,5,6,7,8,9])
// print2dArray([1,2,[3,4,5],6,[7,8],9])
// const createMatrixFromArray = (array) => {
//   // Checking if multidimensional
//   let isMultidimensional = false;
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i]) == true) {
//       isMultidimensional = true;
//     }
//   }
//   if (isMultidimensional == false) {
//     let newString = ""
//     for (let i = 0; i < array.length; i++) {
//       newString = newString.concat(array[i] + " ")
//     }
//     console.log(newString)
//   }
//   if (isMultidimensional == true) {
//     for (let i = 0; i < array.legnth; i++) {
//       let newString = ""
//       for (let i = 0; i < array[i].length; i++) {
//         newString = newString.concat(array[i] + " ")
//         console.log(newString)
//       }
//
//     }
//   }
// }

// export { function }

export { printWithSpace, printArray, print2dArray }
