Recipes = new Meteor.Collection('recipes');

Recipes.helpers({
  recommendedBeer: function() {

    mapping = {
    seafood: 	"lager, pilsner, stout, witbier",
	meaty: 		"lager, ale, bock, porter, hefenweizen",
	creamy: 	"witbier",
	sweet: 		"fruit, hefenweizen",
	salty: 		"pilsner, lager, stout",
	spicy: 		"ale, fruit, lager, pilsner, bock",
	oily: 		"lager, pilsner",
	fruity: 	"fruit, hefenweizen, pilsner",
	smoky: 		"porter, stout",
	cheesy: 	"	",
	eggy: 		"fruit",
	roasty: 	"stout, bock",
	crispy: 	"fruit",
	rich: 		"stout, bock"};

	return mapping[this.category[0]];

  }
});