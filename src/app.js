(function(){
	var app = angular.module('library', []);

	app.controller('LibraryController', function(){
		this.product=books;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(tab){
			return (this.tab === tab);
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var books = [
	{
		name: 'A Smarter Way to Learn Javascript',
		author: 'Mark Myers',
		price: 1317.00,
		amazonLink: "http://www.amazon.in/Smarter-Way-Learn-JavaScript/dp/1497408180/ref=sr_1_1?s=books&ie=UTF8&qid=1420793034&sr=1-1&keywords=a+smarter+way+to+learn+javascript",
		freeBookLink: false,
		image: 'images/a-smarter-way-to-learn-javascript.jpg',
		description: "Whether you're a beginner or an experienced coder doesn't matter. Plenty of veterans have told me, \"I wish someone had used this approach to teach me [HTML, PHP, jQuery, C#, Ruby, Java, Python, fill in the blank].\" Experienced or not, you'll probably like my book if you find other books too dense, too technical, and too unsympathetic to the learner's needs.",
		aboutAuthor: "I'm a former lecturer in the Communications School of Boston University. I hold an A.B. from Harvard. My professional focus is on using technology to reduce the effort and tedium of learning, primarily through interactivity. I'm developing the \"A Smarter Way to Learn\" series on programming, a collection of instructional books paired with online interactive exercises. I run the website http://www.ASmarterWayToLearn.com.",
		reviews: [
			{
				stars: 5,
				body: "Really well put together",
				author: "brendan_eich@netscape.com"
			},
			{
				stars: 5,
				body: "Wow, I can't believe you got me addicted to this. I have never experienced anything like this before when learning.",
				author: "mark_zuckerberg@facebook.com"
			}
		]
	},
	{
		name: 'Eloquent Javascript',
		author: 'Marijn Haverbeke',
		price: 2367.14,
		amazonLink: "http://www.amazon.in/Eloquent-JavaScript-2e-Marijm-Haverbeke/dp/1593275846/ref=sr_1_1?s=books&ie=UTF8&qid=1420794750&sr=1-1&keywords=eloquent+javascript",
		freeBookLink: "http://eloquentjavascript.net/",
		image: 'images/eloquent-javascript.jpg',
		description: "Eloquent JavaScript goes beyond the cut-and-paste scripts of the recipe books and teaches you to write code that's elegant and effective. You'll start with the basics of programming, and learn to use variables, control structures, functions, and data structures. Then you'll dive into the real JavaScript artistry: higher-order functions, closures, and object-oriented programming.",
		aboutAuthor: "Marijn Haverbeke is a programming language enthusiast and polyglot. He's worked his way from trivial BASIC games on the Commodore, through a C++ phase, to the present where he mostly hacks on database systems and web APIs in dynamic languages. He created and maintains several popular open source projects.",
		reviews: [
			{
				stars: 4,
				body: "A book with detailed but challenging examples",
				author: "bill_gates@microsoft.com"
			},
			{
				stars: 3,
				body: "Examples are difficult to follow, yet it's a good book to overview the language.",
				author: "Dennis_ritchie@cprogramming.com"
			}
		]
	}];
})();