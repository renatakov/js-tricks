//async, await, Promises

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 500, "home")
    
// })
// .then(res => {
//     console.log(res) // 1
// })
// .finally(()=>{
//     console.log("Finish") //2
// })
// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 1200, "go")
// })
// .then(resolve=>{
//     console.log("promise", resolve) // 3
// })
// .finally(()=>{
//     console.log("Done") // 4
// })



// Promise.race([promise, promise2]).then((value) => {
//     console.log(value); // home
    
// });



// async function newsFunc(){

//     let fetchPromise =  await fetch("http://api.weatherapi.com/v1/current.json?key=f57ded1f279f4aeaa14102446232101&q=London&aqi=no");
//     return fetchPromise.json()
// }

// console.log(newsFunc())

