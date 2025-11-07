const btnEl = document.querySelector('#btn');
const jokeEl = document.querySelector('#joke');

const apikey = "/RzO30P3LYI/VXtlJa3uLA==ZIHSsFFEwVRdx6j8"

const options = {
    mehod: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {

    try {

    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";

    jokeEl.innerText = data[0].joke;

    } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
    console.log(error);
    
    }

}

btnEl.addEventListener('click', getJoke)