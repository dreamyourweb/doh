Meteor.startup(function () {
	if (BeerGlasses.find().count() === 0) {
		response = HTTP.get('https://api.bol.com/catalog/v4/search/', { params: { apikey: 'DDEDE21AA85B4F1F9A3FA2F5F2156077', q: 'bierglas', format: 'json', limit: 100, offset: 100 } } );
		products = JSON.parse(response.content);
		products.products.forEach(function(product){
			BeerGlasses.insert(product);
		});
	}

	if (Recipes.find().count() === 0) {
		recipes = JSON.parse(Assets.getText("recipes.json"));
		recipes.forEach(function(recipe){
			Recipes.insert(recipe);
		});
	}
});
