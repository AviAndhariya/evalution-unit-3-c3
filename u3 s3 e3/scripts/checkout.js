// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
// Store the wallet amount to your local storage with key "amount"

wallet.innerText = Number(JSON.parse(localStorage.getItem("amount")));