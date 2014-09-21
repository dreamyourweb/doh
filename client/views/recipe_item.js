Template.recipe_item.helpers({
	image_url: function(){
		if (this.receptimageid){
			return "https://frahmework.ah.nl/!data/recepten/jpg200/" + this.receptimageid + ".jpg";
		} else {
			return "http://placehold.it/200x200";
		}

	},
	randomBeer: function(){
		beers = Session.get("beers");
		if (beers){
			return beers[Math.floor(Math.random()*beers.length)];
		} else {
			return undefined;
		}
	},

	prettyBeerTypes: function(){
		return _.str.capitalize(_.toSentence(this.recommendedBeerTypes()));
	},

	recommendedBeers: function(){
		beers = [];
		this.recommendedBeerTypes().forEach(function(beer_type){
			beer = _.sample(Beers.find( { bierType: beer_type } ).fetch());
			if (beer) {
				beers.push(beer);
			}
		});
		return beers;
	}
});