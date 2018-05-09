// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Initialzing the quotes array
var quotes = [
	{
		quote: "A journey of a thousand miles must begin with a single step",
		source: "Lao Tzu",
		tags: ["philosophers", "nonfiction"]
	}, 
	{
		quote: "If you can't explain it simply, you don't understand it well enough",
		source: "Albert Einstein",
		tags: ["famous people", "nonfiction"]
	},
	{
		quote: "I think, therefore I am",
		source: "Rene Descartes",
		tags: ["philosophers", "nonfiction"]
	},
	{
		quote: "The only thing I know is that I know nothing",
		source: "Socrates",
		tags: ["philosophers", "nonfiction"]
	},
	{
		quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people",
		source: "Eleanor Roosevelt",
		tags: ["famous people", "nonfiction"]
	},
	{
		quote: "Some are born great, some acheive greatness, and some have greatness thrust upon them",
		source: "William Shakespeare",
		tags: ["famous people", "nonfiction"]
	},
	{
		quote: "I am the one who knocks",
		source: "Walter White",
		tags: ["television", "fiction"],
		citation: "Breaking Bad",
		year: 2011
	}
];


//Creating functions
function getRandomQuote() {
	var id = Math.floor(Math.random() * quotes.length);
	return quotes[id];
}

function printQuote() {
	//Getting quote
	var quote = getRandomQuote();

	//Interpolating quote and source
	var html = `<p class="quote"> ${quote.quote} </p><p class="source"> ${quote.source}`;

	//Interpolating citation and year if applicable
	if (quote.citation) {
		html += `<span class="citation"> ${quote.citation} </span>`
	}
	if (quote.year) {
		html += `<span class="year"> ${quote.year} </span>`
	}

	//Closing out paragraph tag and printing each quotes tags
	html += `</p><p class="tags"> Tags: ${quote.tags} </p>`;

	//Inserting html into webpage
	document.getElementById('quote-box').innerHTML = html;
}