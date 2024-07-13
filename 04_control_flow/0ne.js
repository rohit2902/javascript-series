//if

// <,>, <=, >=, ==, !=, ===,!===

// const temperature =41
// if (temperature===41) {
//     console.log("Less than 50")
// }
// else{
//     console.log("temperature is greater than 50")
// }
// console.log("Execute")

const score = 200
if (score>100) {
    const power ="fly"
    //console.log(`User power: ${power}`)
}

const balance = 1000
if(balance>500)console.log("test");

const UserLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const LoggedFromEmail = true
if (UserLoggedIn && debitcard ) {
    console.log("Allow to buy course")
}
if (LoggedFromEmail || LoggedInFromGoogle) {
    console.log("Allow to buy course")
}