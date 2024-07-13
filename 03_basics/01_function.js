// function sayMyName(){
//     console.log("R")
//     console.log("o")
//     console.log("h")
//     console.log("i")
//     console.log("t")
// }
// sayMyName()

// function addTwoNumbers(number1,number2){
//    console.log( number1+number2)
// }

function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result
    return number1+number2
 }
 const result =addTwoNumbers(3,2)
 //console.log(result)

 function logInUserMessage(username){
    if(username===undefined){
        console.log("Please Enter a username")
        return
    }   
    return`${username} just logged in`
 }

 //console.log(logInUserMessage("rohit"))
// console.log(logInUserMessage())

function calculatecardPrice(...num1){
    return num1
}
//console.log(calculatecardPrice(200,400,500,2000))

const user ={
    username:"rohit",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`)
}
//handleobject(user)
handleobject({
    username:"kumar",
    price:122
})
 const myNewArray =[200,400,100,600]
 
 function returnsecandValue(getArray){
 return getArray[1]

}
console.log(returnsecandValue(myNewArray))

console.log(returnsecandValue([200,400,1000]))