Template.recipes.helpers({
	recipes: function(){
		return Recipes.find( { receptomschrijving: /Session.get("recipesSearch")/i } );
	}
});

Template.recipes.events({
	'submit #searchRecipeForm': function(event){
		Session.set("recipesSearch", r);
		event.preventDefault();
	}
});

Template.recipes.rendered = function(){
	Meteor.call('findRandomBeers', function (e,r) {
		Session.set("beers", r);
	});
}