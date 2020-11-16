const url = 'https://shakespeare-insults-generator.herokuapp.com/getInsult';
const btn = document.getElementById('btn');
const insultElement = document.getElementById('insult');
const playElement = document.getElementById('play');

let showInsult = (insult, play) => {
    insultElement.innerHTML = insult;
    playElement.innerHTML = play;
}

let getInsult = () => {
    fetch(url)
    .then(response => response.json())
    .then(response => showInsult(response.insult, response.play))
}

btn.addEventListener('click', getInsult);