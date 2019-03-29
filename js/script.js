let citation = document.getElementsByClassName("citation")[0];
let year = document.getElementsByClassName("year")[0];

const quotes = [
  {quote : "Don't cry because it's over, smile because it happened.",
    source : "Dr. Seuss "},
 {
   quote:"Be yourself; everyone else is already taken.",
   source:"Oscar Wilde "
 },
 {
   quote:"Be the change that you wish to see in the world.",
   source:"Mahatma Gandhi "
 },
 {
   quote:"Always forgive your enemies; nothing annoys them so much.",
   source: "Oscar Wilde"
 },
 {
  quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  source:"Martin Luther King Jr",
  citation:"A Testament of Hope: The Essential Writings and Speeches"
 },

 {
  quote:"It is better to be hated for what you are than to be loved for what you are not",
  source:"Andre Gide"
 },
 {
  quote:"Love all, trust a few, do wrong to none.",
  source:"William Shakespeare",
  citation:"As You Like It"
 },
 {
  quote:"Never put off till tomorrow what may be done day after tomorrow just as well.",
  source:" Mark Twain "
 },
 {
  quote:"That which does not kill us makes us stronger.",
  source:" Friedrich Nietzsche "
 },
 {
  quote:"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
  source:"Lao Tzu "
 },
 {
   quote:"One need not be a chamber to be haunted; One need not be a house; The brain has corridors surpassing Material place.",
   source:"Emily Dickinson",
   citation:"P",
   year:1899
 },
 {
   quote:"Do not be anxious about tomorrow, for tomorrow will be anxious for itself. Let the day's own trouble be sufficient for the day.",
   source:"Jesus",
   citation:"Matthew 6:34",
   year: 'AD 27–29'
 }
];

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
              getrandomQuote function
              generates a random number which is used as index of
              the quotes array allowing us to generate a quote based on 
              the random quote
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
let getRandomQuote = ()=>{
  let i= Math.floor(Math.random()*12);
  return quotes[i];
}


console.log(getRandomQuote());

let printQuote = ()=>{
  let randomQuote = getRandomQuote();
  let quoteBox = document.getElementById('quote-box');
  let quoteBoxHtml = '';
  quoteBoxHtml +=`<p class="quote">  ${randomQuote.quote} </p>`;
  quoteBoxHtml += `<p class="source"> ${randomQuote.source}`;
  if(randomQuote.citation){
    quoteBoxHtml += `<span class="citation"> ${randomQuote.citation} </span>` ;
  }if(randomQuote.year){
    quoteBoxHtml += `<span class="year"> ${randomQuote.year} </span>`; 
  } 
  quoteBoxHtml += `</p>`
  console.log( quoteBoxHtml);
  quoteBox.innerHTML= quoteBoxHtml;
}
printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);