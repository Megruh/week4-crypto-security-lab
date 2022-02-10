//shift 5 to the right

const cipher = (str = '', n = 5) => {
    let arr = []
  for (let i = 0; i < str.length; i++){
      arr.push(String.fromCharCode((str[i].charCodeAt() + n)))
  }
  let result = arr.join('')
  return result
}
console.log(cipher("I love cryptography!"))

