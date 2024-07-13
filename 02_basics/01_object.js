// singleton
//object.create

// object literals

// const mysym = Symbol("key1")

// const jsUser =
// {
//     Name: "rohit",
//     "full name ": "rohit kumar",
//     [mysym]: "mykey1",
//     age: 18,
//     location: "sasaram",
//     email: "rohitabr@gmail.com",
//     isLoggedIn: false,
//     lastLogindays:["Monday, saturday"]

// }

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name "])
// console.log(jsUser[mysym])


// part2 

// const tinderUser = new object()
const tinderUser = {}
tinderUser.id ="123asd"
tinderUser.name = "rohit"
tinderUser.isloggedIn = false

//console.log(tinderUser)

const regularuser ={
    email:"rohit@gmail",
    fullname:{
        userfullname:{
           firstname:"rohit",
           lastname:"kumar"
        }
    }
}
//console.log(regularuser.fullname)

 const obj1 ={1:"a",2:"b"}
 const obj2={3:"d",4:"e"}

 //const obj3 ={obj1,obj2}
 //const obj3 = Object.assign(obj1,obj2)
 const obj3 = {...obj1,...obj2}
 //console.log(obj3)

//  console.log(tinderUser)
//  console.log(Object.keys(tinderUser))
//  console.log(Object.values(tinderUser))
//  console.log(Object.entries(tinderUser))
//  console.log(tinderUser.hasOwnProperty('isLoggedIn'))

 const course={
    coursename : "js in hindi",
    Price:"999",
    courseInstructor:"Rohit"
  
 }

 //course.courseInstructor
 const {courseInstructor}=course
 console.log(courseInstructor)

//  const navbar=({company})=>{

//  }
//  navbar(company = "kumar") 

// {
//     name: "rohit",
//     "coursename":"js in hindi",
// }