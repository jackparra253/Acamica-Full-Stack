const promisesSuccesOrError = new Promise((resolve, reject) => {
    const typeNumber = getEvenorOdd();

    if ('even' === typeNumber)
        console.log(resolve(`Succes ${typeNumber}`));
    else
        console.log(reject(`Error ${typeNumber}`));

});

function getEvenorOdd() {
    const number = getRandomInt(1, 100);
    if (number % 2 == 0) 
        return 'even';
    else 
        return 'odd';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


promisesSuccesOrError
    .then(data => console.log(`Hi ${data}`))
    .catch(error => console.log(`! ${error}`));