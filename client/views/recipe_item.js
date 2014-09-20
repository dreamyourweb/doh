Template.recipe_item.helpers({
	image_url: function(){
		if (this.receptimageid){
			return "https://frahmework.ah.nl/!data/recepten/jpg200/" + this.receptimageid + ".jpg";
		} else {
			return "http://placehold.it/200x200";
		}

	}
});