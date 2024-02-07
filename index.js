//promise
setTimeout(function(){
    console.log("hello world")
},4000)

// setInterval(function(){
//     document.write("wow")
// },2000)

let promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("This is first text")
    },2000)
})

//use resolve

let promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name : "Ali" , password : "25353"})
    },2000)
})

promiseTwo.then(function(user){
    console.log(user)
})

//three

let promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Bushra" , email : "bushra@gmail.com"})
    },3000)
})

promiseThree.then(function(elec){
    return elec.email;
}).then(function(userEmail){
    console.log(userEmail)
})
let promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
        resolve({name : "abc" , password : "86868"})

        }
        else{
            reject("ERROR : SOMETHING WENT WRONG HERE!")
        }
    },4000)
})

promiseFour
.then(function(apple){
    return apple.name;
}).then(function(myName){
    console.log(myName)
})
.catch(function(error){
   console.log(error)
})
.finally(function(){
    console.log("promise has been resolve and reject!")
})

//async

let promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({party : "ppp" , Email : "party@gmail.com"})
        }
        else{
            reject("error in this js function")
        }
    },4000)
})
async function consumedPromiseFive(){
    try{
        let resp = await promiseFive;
        console.log(resp);
    }
    catch(error){
        console.log(error);
    }
}
consumedPromiseFive()



//user data fetch

async function getAllUsers(){
    try{
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        document.write(JSON.stringify(data))
    }
    catch(error){
        console.log(error);
    }
}
getAllUsers()