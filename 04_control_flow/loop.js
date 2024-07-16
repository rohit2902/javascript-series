// for of

// const arr = [1,2,3,4,5,]
// for (const num of arr) {
//     console.log(num)
// }


// const greetings = "hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps

// const Maps = new Map()
// Maps.set('IN',"India")
// Maps.set('USA',"United States of Ameica")
// Maps.set('Fa',"France")
// //console.log(Maps)
// for (const [key,value] of Maps) {
//     console.log(key, ":-",value )
// }


// object

// const myobject ={
//     js: 'javascript',
//     cpp: 'c++',
//     rb: "ruby",
//     swift:"swift by apple"
// }
// for (const key in myobject) {
//   console.log(`${key} shortcut is for ${myobject[key]}`)
// }

//array

// const programming =["js","rb","py","java","cpp"]
// for (const key in programming) {
//    console.log(programming[key])
// }

const programming =["js","rb","py","java","cpp"]
// programming.forEach( function (item) {
//     console.log(item)
// }    )

//same

// programming.forEach((item) =>{
//     console.log(item)
// })

// function printme(item){
//     console.log(item)
// }
// programming.forEach(printme)

// programming.forEach(item,index,arr=>{
//     console.log(item,index,arr)
// } )

const mycoding =[
    {
        laguagename:"javascript",
        laguageFilename:"js"
    },

    {
        laguagename:"java",
        laguageFilename:"java"
    },
    {
        laguagename:"python",
        laguageFilename:"py"
    },
]

mycoding.forEach( (item) => {
    console.log(item.laguagename);
})