// // for loop

// // print table of 5
// let num =5
// for(let i =1;i<=10;i++){
//    // console.log(`${num}*${i} = ${num*i}`)
// }

// // for- in
// //const student ={
// //     FirstName: "Rohit",
// //     MiddleName: "kumar",
// //     lastName: "Kushwaha",
// //     PhoneNUmber: "9784561237",
// //      mark: [21,98,67,98,43]
// //   }
//  // for (const key in student) {
//   // console.log(key)
//   }
//   let arr1 =[21,23,43,32,65,76,87,90,23,54]
//   for (const element of arr1) {
//    // console.log(element)
    
//   }
//   let num1= 5
//   let i =1
//   while(i<=10){
//    // console.log(`${num1} *${i} = ${num1*i}`)
//     i++
//   }

  // write a program to print the marks of a student in an object using for loop

  // Define an object to store the student's marks
// let studentMarks = {
//     Math: 85,
//     English: 78,
//     Science: 92,
//     History: 88,
//     Geography: 81
// };

// // Extract the keys of the object into an array
// let subjects = Object.keys(studentMarks);

// // Use a traditional for loop to iterate over the array of keys
// for (let i = 0; i < subjects.length; i++) {
//     let subject = subjects[i];
//     console.log( studentMarks[subject]);
// }
// for (const key in studentMarks) {
//    console.log(studentMarks[key])
// }
 
// write a program to print "try again" until the user enters the correct number
// Define the correct number
// const correctNumber = 7;

// // Initialize a variable to store the user's input
// let userInput;

// // Use a while loop to keep asking the user until they enter the correct number
// while (userInput !== correctNumber) {
//     // Prompt the user to enter a number
//     userInput = parseInt(prompt("Enter the correct number:"));

//     // Check if the input is correct
//     if (userInput !== correctNumber) {
//         alert("Try again");
//     } else {
//         alert("Correct!");
//     }
// }

// write a function to find mean of 5 number
function sum (){
  let sum1 =0;
  for(let i =1 ;i<=5;i++){
    sum1 = sum1+i

   
  }
  console.log(sum1)
}
sum()


