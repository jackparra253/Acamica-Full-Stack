const promiseError = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(reject('Error'));
    }, 2000)
});

promiseError.catch((errorMessage) => console.log(`!!! ${errorMessage}`));