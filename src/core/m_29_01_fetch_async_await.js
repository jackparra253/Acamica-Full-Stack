const uri = 'https://jsonplaceholder.typicode.com/users';

function getUsers(uri) {
    fetch(uri)
        .then(response => response.text())
        .then(text => console.log(text))
        .catch(err => console.error('Error', err));
}

const result = getUsers(uri);

async function getUsers2() {
    try {
        const response = await fetch(`${uri}`);;
        console.log(await response.text());
    } catch (err) {
        console.log('Error', err);
    }
}

const result2 = getUsers2(uri);

const uriGitHubUser = 'https://api.github.com/users';
const user = 'jackparra253';

async function getUserGitHub(uri, user) {
    try {
        const response = await fetch(`${uri}/${user}`);
        const dataJson = await response.json();
        const data = new Array(JSON.parse(JSON.stringify (dataJson)));
        console.log(data[0]);
    } catch (err) {
        console.log('Error', err);
    }
}
const resultUserGitHub = getUserGitHub(uriGitHubUser, user);
