const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = []      //making a global variable so we can use it across the script

//SHow new quote

function newQuote() {

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]  //logic to pick a random Quote from apiquotes array
    //CHeck if Author field is blank and replace with unknown
    if (!quote.author) {
        authorText.textContent = "Unknown"
    } else {
        authorText.textContent = quote.author
    }
    //Check the quote lenght in order to determine styliing
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text
}

// Get quotes from API

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert(error)  //Catch error

    }
}
//To tweet a quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}
//Event listeners

newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

// //On Load
getQuotes();
//newQuote()