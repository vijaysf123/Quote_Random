const quote = document.getElementById("quote")
const author = document.getElementById("author")
const quoteBtn = document.getElementById("btn")

function randomQuote() {
    quoteBtn.innerText = "Loading Quote...";

    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            quote.innerText = data.content;
            author.innerText = data.author;
            quoteBtn.innerText = "New Quote"
        });
}

quoteBtn.addEventListener("click", randomQuote);