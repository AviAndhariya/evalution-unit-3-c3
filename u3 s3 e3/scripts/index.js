// Store the wallet amount to your local storage with key "amount"
function addTowallet() {
    let amount = document.getElementById("amount").value;
    // console.log(amount);
    let wallet = document.getElementById("wallet");

    if (wallet.innerText > 0) {
        let amounts = JSON.stringify(localStorage.setItem("amount", Number(amount) + Number(wallet.innerText)));
    }
    else{
        let amounts = JSON.stringify(localStorage.setItem("amount", Number(amount)));
    }

    wallet.innerText = Number(wallet.innerText);
    wallet.innerText = Number(JSON.parse(localStorage.getItem("amount")));
}