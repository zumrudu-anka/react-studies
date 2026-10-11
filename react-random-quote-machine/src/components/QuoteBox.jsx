import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { colors } from "../assets/colors";
import quotesData from "../data/quotes.json";
import { getRandomQuote } from "../utils/getRandomQuote";

export const QuoteBox = () => {
    const quotes = quotesData.quotes;
    
    const [currentQuote, setCurrentQuote] = useState(getRandomQuote(quotes));
    const [twitterUrl, setTwitterUrl] = useState("");

    // useEffect(() => {
    //     fetch(
    //         "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    //     )
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((data) => {
    //             setQuotes(data.quotes);
    //         });
    // }, []);

    const changeQuote = () => {
        const randomQuote = getRandomQuote(quotes);
        setCurrentQuote(randomQuote);
    }
    
    useEffect(() => {
        const encodedURIComponent = encodeURIComponent(`"${currentQuote?.quote}" ${currentQuote?.author}`);
        const currentTwitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodedURIComponent}`;
        setTwitterUrl(currentTwitterUrl);
        
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        document.documentElement.style.setProperty('--current-color', colors[randomColorIndex]);
    }, [currentQuote]);

    return (
        <div id="quote-box">
            <p id="text">
                <FontAwesomeIcon icon={faQuoteLeft} />
                {currentQuote?.quote}
            </p>
            <p id="author">- {currentQuote?.author}</p>
            <div className="quote-buttons">
                <a id="tweet-quote" href = {twitterUrl?? "#"} className="button" target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <button
                    className="button"
                    id="new-quote"
                    onClick={() => changeQuote()}
                >
                    New Quote
                </button>
            </div>
        </div>
    );
};