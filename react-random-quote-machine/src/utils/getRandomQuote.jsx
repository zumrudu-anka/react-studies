export const getRandomQuote = quotes => {
    return quotes[Math.floor(Math.random() * quotes.length)];
};