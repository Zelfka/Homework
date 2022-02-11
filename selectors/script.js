console.log('Veronika')
for (i=0; i<10; i++) {
  console.log(i)
}
for (i=1; i<11; i++) {
  console.log(i)
}
for (i=0; i<=18; i=i+2) {
  console.log(i)
}
let printNumbersTill = (a) => {
  for (i=1; i<=a; i=i+1) console.log (i)
}
console.log(printNumbersTill(20))
console.log(printNumbersTill(15))

let getGreetingsTo = (name) => {
  return "Hello" + name + "!"
}
console.log(getGreetingsTo(' Verco'))

let printValues = (array) => {
  for (i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
console.log(printValues([0,3,6,9]))

let myNumbers = [1,4,7,8]
myNumbers.forEach((number) => {
  console.log(number);
})