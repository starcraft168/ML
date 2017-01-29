var natural = require('natural');
var myString = "I'm surprised! I didn't know you could make it.";
var tokenizer = new natural.RegexpTokenizer({patter});

console.log(tokenizer.tokenize(myString));

stemming means to find the roots of words
var natural = require('natural');
var stemmer = natural.PorterStemmer;

console.log(stemmer.stem("mangoes"));
console.log(stemmer.stem("showing"));

var nounInflector = new natural.NounInflector();
console.log(nounInflector.pluralize("mouse"));
console.log(nounInflector.singularize("tomatoes"));

var countInflector = natural.CountInflector;

for(var i=0; i<10; i++) {
	console.log(countInflector.nth(i));
}

var NGrams = natural.NGrams;

var myString = "whats up man you are cool Jane Smith man Max";
console.log(NGrams.bigrams(myString));
helps find all the names in the sentence

var Tagger = natural.BrillPOSTagger;
var myString = "Lys soldered the beautiful jewelry pieces";

