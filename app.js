//Variables to access DOM

let quoteAuthor = document.querySelector(".author");
let quote_Quote = document.querySelector(".quote");

//Function to fetch random quotes from API
function getQuotes() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      let newQuote = data.content;
      let newAuthor = data.author;

      quoteAuthor.innerHTML = `${newAuthor}`;
      quote_Quote.innerHTML = `${newQuote}`;
    });
}

//Function to change background color
function setBgColor() {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    document.querySelector("body").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

//Function which combines the two previous functions which results in a background change before the next quote is loaded
function changeQuote() {
    setBgColor();
    getQuotes();
}

setInterval (changeQuote, 15000);
