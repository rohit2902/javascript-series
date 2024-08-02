const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // Db calls, cryptography,network
    setTimeout(() => {
        //console.log(`Async task is complete`)
        resolve() //connet with .then
    }, 1000);
})
promiseOne.then(function(){
    //this function take automatically argument
  //  console.log(`Promise consumed`)
})

//without store in variable

new Promise(function(resolve,reject){
    setTimeout(function(){
      //  console.log(`Asyn task 2`)
        resolve()
    },1000)
}).then(function(){
   // console.log("Async 2 reolved")
})

//promisethree
const promisethree =new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({userName:"rohit",email:"rohitssm@gmail.com"})
    }, 1000);
})
.then(function(user){
    console.log(user)
})

//promisefour
const promisefour = new Promise( function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName:"rohit",password:"123"})
        }else{
            reject(`ERROR: Something went wrong`)
        }
        
    },1000)
})
// is se solve ho skta hai
// .then().catch()

promisefour
 .then((user)=>{
    console.log(user);
    return user.userName
})
.then((userName)=>{
console.log(userName)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("The promise is either resolved or rejected")
})
//promiseFive
const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName:"javascript",password:"123"})
        }else{
            reject(`ERROR: js went wrong`)
        }
        
    },1000)  
})
async function consumepromisefive() {
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)

    }
}
consumepromisefive()

async function getaAllusers(){
 try{
    const response = await fetch('https://jsonplaceholder.tryicode.com/users')
    const data = await response.json()
    console.log(data)
 }catch(error){
   console.log("E:",error)
 }
}
getaAllusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
