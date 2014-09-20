Template.recipes.helpers({
	recipes: function(){
		return Session.get("recipes");
	}
})

Template.recipes.events({
	'submit #searchRecipeForm': function(event){
		Meteor.call('findRecipes', $("#searchRecipeField").val(), function (e,r){
			Session.set("recipes", r);
		});
		event.preventDefault();
	}
})