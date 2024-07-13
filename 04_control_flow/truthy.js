// //const UseEmail = "Rohit@gmail"
// if (UseEmail) {
//    // console.log("Got user email")

// }
// else{
//    // console.log("don't have user email")
// }

//false values

//false,0,-0,BiInt,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},funtion(){}
 const UseEmail=[]
 if (UseEmail.length==0) {
     console.log("Array is empty")
 }
const emptyobj = {}
if (Object.keys(emptyobj).length==0) {
    console.log("Object is empty")
}

// nullish coalescing operaor(??): null undefined

let val1;
val1=5??10  //print 5
val1 = null??10   //print 10
val1 = undefined??15  //print 15
val1 = null??10??20   //print 10


console.log(val1)

// Terniary operator

// condition? true: false

