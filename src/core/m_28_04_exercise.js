const promiseOne = new Promise(function (resolve, reject) {
    const number = getRandomInt(0, 2);

    setTimeout(() => {
        console.log(resolve(`Success promise 1 ${number}`))
    }, number);
});

const promiseTwo = new Promise(function (resolve, reject) {
    const number = getRandomInt(0, 2);

    setTimeout(() => {
        console.log(resolve(`Success promise 2 ${number}`))
    }, number);
});

Promise.race([promiseOne, promiseTwo]).then(function (respusta) {
    console.log(respusta)
}).catch(function (error) {
    console.error(error);
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
