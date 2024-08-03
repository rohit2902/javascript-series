/*              variable and constant

Variable: it is a container to store value.they can change
constant: does not change it can be inslisation one time

 
   Datatype

   1:- Null    */
      let a = null
      console.log(typeof a)
      // undefined
      let b ;
      console.log(typeof(b))
      // string
      let Name ="Rohit"
      console.log(typeof(Name))
      //boolean
      let login = true
      console.log(typeof( login))
      //bigint
      let large = 10n
      console.log(typeof(large))
      //symbol
      let sy = Symbol('*')
      console.log(typeof(sy))
     


/* Write a javascript program  to store Name, phone number and marks of a student using onject */
  const student ={
    FirstName: "Rohit",
    MiddleName: "kumar",
    lastName: "Kushwaha",
    PhoneNUmber: "9784561237",
     mark: [21,98,67,98,43]
  }
  console.log(student)

// Create a variable of type string and try to add a number to it
   let str = "rohit"
   let num = 2514
   let str1 = str.concat(num)
   console.log(str1)
   // or
  // let str2 = str+num
  // console.log(str2)

// Use typeof operator to find the datatype of the string in last question
//    console.log(typeof str)
//    console.log(typeof num)
//    console.log(typeof str1)

// Creata a const object in javascript can you change it to hold a number later
 const onj ={
    key:"value"
 }
 onj.key ="rohit"
 //console.log(onj)


 // use logical operators to find whether the age of a person lies between 10 and 20
  let age =26
  if(age>10 && age<20){
    console.log("your are selected")
  }
  else{
    console.log("you are not selected")
  }

//Demonstrate the use of switch case statemants in javascript
let age1 = 19
 switch (age) {
    case age<10:
         console.log("you are child")
        break;
 
    default:
        console.log("you are adult")
        break;
 }
 
 // Write a javascript program to find whether a number is divisible by 2 and 3
 let num1 =6
 if(num1%2==0 && num1%3==0){
    console.log("num1 is divisible by 2 and 3")
 }

 //Write a javascript program to find whether a number is divisible by  either 2 and 3
 let num2 =8
 if(num1%2==0 || num1%3==0){
    console.log("num1 is divisible by 2 or 3")
 }

 // print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator
 let age2= 19
 console.log((age2>18)?'You can Drive':'You cannot Drive')

 // for loop
  let num3 = 4
  