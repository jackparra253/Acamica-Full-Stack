const promiseSuccess = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log(resolve("Success"))
    }, 2000);
});

promiseSuccess.then((succesMessage) => console.log(`Hi ${succesMessage}`));