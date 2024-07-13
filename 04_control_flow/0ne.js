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

if (balance<500) {
    console.log("Less than 500");
}
else if (balance<900) {
    console.log("less than 750")
} else {
    console.log("less than 1200")
}

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

const month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
            console.log("fab")
            break;    
    case 3:
        console.log("april")  
         break;
    default:
        console.log("default case match")
        break;
}

