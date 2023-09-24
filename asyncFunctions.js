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



// let fetchPromise = fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-08-24&sortBy=publishedAt&apiKey=5fb16416daac4a89ae9f0cd903059858")
// .then(response=>{
//     return response.json()
// })
// .then(data=>{
//     let arr = data.articles.map((item)=>{
//         return item
//     })
//     arr.length = 20
//     console.log(arr)
// })
// .finally(()=>{
//     console.log("done")
// })


// console.log(fetchPromise)