// let Name ="Rohit kumar"
//lenght
// console.log(Name.length)
// //specific index value
// console.log(Name.charAt(5))
// // charcode
// console.log(Name.charCodeAt(5))
// console.log(Name.codePointAt(6))
// console.log(Name.toUpperCase())
// console.log(Name.toLocaleLowerCase())
// console.log(Name.toLowerCase())
// let roll = 12
// console.log(roll.toString())
// console.log(Name.slice(2,5))
// console.log(Name.slice(2))
// console.log(Name.trim())
// console.log(Name.length)

// let lastName ="Kushwaha"
// let full_name =(Name.concat(lastName))
// console.log(full_name)

// what will the following print in javascript "console.log("roh \"".lenght)

//console.log("roh \"".lenght)

//Explore the includes , startswith & endwith function of a string

// console.log(Name.startsWith("Roh"))
// console.log(Name.endsWith("r"))

//Extract the amount out of this string "please give rs 1000"
const str ="please give rs 1000"
//console.log(str.slice(-4))
const str2 =(str.replace("give","us"))
//console.log(str2)

//Array
let number = [1,2,3,4,5,6,7,89,10]
console.log(number[3])
console.log(number[0])
//changing value
number[3]= 44
console.log(number)
console.log(typeof number)
console.log(number.toString())
console.log(number.join("--"))
console.log(number.pop())
number.push(0)
console.log(number)
number.shift()
console.log(number)
number.unshift(21)
console.log(number)
delete number[2]
console.log(number)

let fruit =[98,97,95]
let car= ["BMW","Alto","thar", "scarpio"]

console.log(number.concat(fruit,car))
 number.slice(3,10)
 console.log(number)

 let num3 =[1,2,3,4,5]

 //console.log( number.splice(2,1,23,24))
 num3.reverse()
 console.log(num3)
 number.forEach((element)=>{
 console.log(element)
 })

 const map1 =num3.map((x)=>  x*2
  
 )
 console.log(map1)

 const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);