Template.recipes.helpers({
	recipes: function(){
		regex_string = new RegExp(".*" + Session.get("recipesSearch") + ".*", "i");
		return Recipes.find( { receptomschrijving: regex_string } );
	}
});

Template.recipes.events({
	'submit #searchRecipeForm': function(event){
		Session.set("recipesSearch", $("#searchRecipeField").val());
		event.preventDefault();
	}
});