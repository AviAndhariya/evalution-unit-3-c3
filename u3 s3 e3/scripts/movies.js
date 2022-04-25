// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// Store the wallet amount to your local storage with key "amount"
wallet.innerText = Number(JSON.parse(localStorage.getItem("amount")));

let movies = document.getElementById("movies");

async function searchMovies() {

    let search = document.getElementById("search").value;
    // console.log(search);

    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=dd8905a1"

    let first = await fetch(url)
        .then(function (res) {
            return res.json()
        }).then(function (res) {

        })
}