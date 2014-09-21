Recipes = new Meteor.Collection('recipes');

Recipes.helpers({
  	recommendedBeerTypes: function() {

		mapping = {
			seafood: 	["pilsener", "stout", "witbier"],
			meaty:      ["pilsener", "bock", "hefenweizen", "dubbel", "tripel"],
			creamy: 	["witbier", "radler"],
			sweet: 		["fruit", "hefenweizen", "blond"],
			salty: 		["pilsener", "stout", "brown"],
			spicy: 		["fruitig", "pilsener", "bock", "blond"],
			oily: 		["pilsener", "radler"],
			fruity: 	["fruit", "hefenweizen", "pilsener"],
			smoky: 		["stout", "brown", "amber"],
			cheesy: 	["fruit"],
			eggy: 		["fruit"],
			roasty: 	["stout", "bock", "brown", "tripel"],
			crispy: 	["fruit"],
			rich: 		["stout", "bock", "brown", "radler"]
		};

		cats = [];
		this.category.forEach(function(cat){
			cats = cats.concat(mapping[cat]);
		});

		cats = _.uniq(cats);
		return cats;

	}

});