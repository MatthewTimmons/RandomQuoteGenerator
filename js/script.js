// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
	{
		quote: 'Did I do that?',
		source: 'Erkel',
		citation: 'Full House',
		year: 1980
	}, 
	{
		quote: 'Howdy doo',
		source: 'Flanders',
		citation: 'The Simpsons',
		year: 1980
	},
	{
		quote: 'Hey, hey, hey',
		source: 'Fat Albert',
		year: 1980
	},
	{
		quote: 'Are you having a laugh?',
		source: 'Ricky Gervais',
		citation: 'Extras',
		year: 2005
	},
	{
		quote: 'You\'re not supposed to do that. You know you\'re not supposed to do that',
		source: 'British Guy',
		citation: 'Peep Show',
		year: 2008
	},
	{
		quote: 'Have you tried turning it off and on again?',
		source: 'Maurice Moss',
		citation: 'The IT Crowd',
		year: 2009
	},
	{
		quote: 'What if I can\'t forget you?',
		source: 'Pierce the Veil',
		citation: 'Caraphernelia',
		year: 2011
	}
];



function getRandomQuote() {
	return quotes[Math.floor(Math.random * quotes.length)];
}

function printQuote() {
	var quote = getRandomQuote();
	var html = 
	`<p class="quote"> ${quote.quote} </p>
	<p class="source"> ${quote.source} </p>
		<span class="citation"> ${quote.citation} </span>
		<span class="year"> ${quote.year} </span>
	</p>`

	document.getElementById('quote-box').innerHTML = html;
}