import { resolve } from "uri-js";

const promise = new Promise((resolve,reject)=>{
   setTimeout(()=>{

    resolve({
        name:'Nikolas Zec'
    })
   },4000) 

   reject('EUnable')
})

console.log('before')

promise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log('Error'+err)
})

console.log('after')