console.log('Hello World');

// https://official-joke-api.appspot.com/random_joke


// const Container = document.querySelector('#container');
// const jokeBtn = document.querySelector('#jokeBtn');

// makeJoke = (joke) => {
//     return `<div>
//                 <h2>${joke.punchline}</h2>
//             </div>`
// }

// makePunch = (joke) => {
//     return `<div>
//                 <h2>${joke.punchline}</h2>
//             </div>`
// }

// addJoketoDom = jokeAsHTML => {
//     Container.innerHTML += jokeAsHTML;
// }

// function getJoke() {
//     fetch('https://official-joke-api.appspot.com/random_joke')
//         .then(joke => joke.json())
//         .then(parsedJoke => {
//             parsedJoke.forEach(j => {
//                 console.log(j);
//                 const jokeAsHTML = makeJoke(j);
//                 addJoketoDom(jokeAsHTML);
//             })
//         })
// };


// jokeBtn.addEventListener('click', getJoke);



// Brenda's Solution-----------------------------------------------------------------

const setupElement = document.querySelector('#container');
const punchlineElement = document.querySelector('#containerPunch');
const jokeBtn = document.querySelector('#jokeBtn');

function addToDom(jokeObject){
    setupElement.innerHTML = `<h4>${jokeObject.setup}</h4>`;
    punchlineElement.innerHTML = `<h4>${jokeObject.punchline}<h4/>`;
}

function getJoke(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(joke => joke.json())
    .then(parsedJoke => {
        console.log('joke', parsedJoke.setup, parsedJoke.punchline);
        addToDom(parsedJoke);
    });
}

jokeBtn.addEventListener('click', getJoke);