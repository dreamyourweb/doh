Recipes = new Meteor.Collection('recipes');

Recipes.helpers({
  recommendedBeer: function() {

	mapping = {
	seafood: 	["pilsner", "stout", "witbier"],
	meaty: 		["pilsner", "bock", "hefenweizen"],
	creamy: 	["witbier", "radler"],
	sweet: 		["fruit", "hefenweizen"],
	salty: 		["pilsner", "stout", "brown"],
	spicy: 		["fruitig", "pilsner", "bock"],
	oily: 		["pilsner", "radler"],
	fruity: 	["fruit", "hefenweizen", "pilsner"],
	smoky: 		["stout", "brown"],
	cheesy: 	["fruit"],
	eggy: 		["fruit"],
	roasty: 	["stout", "bock", "brown"],
	crispy: 	["fruit"],
	rich: 		["stout", "bock", "brown", "radler"]};


	cats = [];
	this.category.forEach(function(cat){
		cats = _.shuffle(cats.concat(mapping[cat]));
	});

	cats = _.uniq(cats);
	return _.str.capitalize(_.toSentence(cats));

  }
});