
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
    myPromise2.then((resolveMessage) => {
        console.log(resolveMessage);
    });
})
