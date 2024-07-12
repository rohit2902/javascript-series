"use strict"; // treat all js code as newer version

//alert(3+3) //we are using node.js, not browser

console.log(3+3);
 console.log("Rohit")

 let name ="rohit"
 let age = 18
 let isloggedin = false

 //number =>2 to power 53
 //bigint
 //string
 //boolean
 //null => standalone value
 //undefined
 //symbol => unique

 //object

 console.log(typeof undefined); // undefined
 console.log(typeof null); //object

 //stack (premitive) heap (non-primitive)

 let myyoutubename ="rohitkumar@123"
 let anothername = myyoutubename
  anothername ="kushwaha"

 console.log(anothername)
 console.log(myyoutubename)

 let user ={
    email:"user@google.com",
    upi:"user@ybl"
 }

 let user2 =user
 user2.email ="kumar@122334"
 console.log(user.email)
 console.log(user2.email)
