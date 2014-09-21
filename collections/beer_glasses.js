BeerGlasses = new Meteor.Collection('beer_glasses');

BeerGlasses.helpers({
	image_url: function(){
		return this.images[2].url;
	},
	link_url: function(){
		return this.urls[0].value;
	}
});