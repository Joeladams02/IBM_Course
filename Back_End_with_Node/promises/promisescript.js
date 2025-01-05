
//A promise is created but isnt run until it is called. 
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 is resolved");
    }, 6000);
})
// A second promise is created but isnt run until it is called.
let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 is resolved");
    }, 3000);
})
// The first promise is called and then the second promise is called. Thus message 1 is printed before message 2.
//However, both promises are run at the same time and then the messages are printed in the order they are resolved.
myPromise.then((resolveMessage) => {
    console.log(resolveMessage);
    return myPromise2;
})
.then((resolveMessage) => {
        console.log(resolveMessage);
});


//The following code does the same as the above but is written without the need for nested for nested .then calls. 
//We await the result from both promise1 and promise2. Once they're both completed, they print.
async function myAsyncFunction() {
    try {
        let [result1, result2] = await Promise.all([
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Promise 1 is resolved");
                }, 6000);
            }),
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Promise 2 is resolved");
                }, 3000);
            })
        ]);
        console.log(result1);
        console.log(result2);
    } catch (err) {
        console.log('error')
    }
}

myAsyncFunction();
