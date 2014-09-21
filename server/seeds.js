Meteor.startup(function () {
	if (BeerGlasses.find().count() === 0) {
		r1 = HTTP.get('https://api.bol.com/catalog/v4/search/', { params: { apikey: 'DDEDE21AA85B4F1F9A3FA2F5F2156077', q: 'bierglazen', format: 'json', limit: 100 } } );
		r2 = HTTP.get('https://api.bol.com/catalog/v4/search/', { params: { apikey: 'DDEDE21AA85B4F1F9A3FA2F5F2156077', q: 'bierglazen', format: 'json', limit: 100, offset: 100 } } );
		p1 = JSON.parse(r1.content);
		p2 = JSON.parse(r2.content);
		products = p1.products.concat(p2.products);
		products.forEach(function(product){
			BeerGlasses.insert(product);
		});
	}

	if (Recipes.find().count() === 0) {
		recipes = JSON.parse(Assets.getText("recipes.json"));
		recipes.forEach(function(recipe){
			Recipes.insert(recipe);
		});
	}
	if (Beers.find().count() === 0) {
		beers = JSON.parse(Assets.getText("beers.json"));
		beers.forEach(function(beer){
			Beers.insert(beer);
		});
	}

});
