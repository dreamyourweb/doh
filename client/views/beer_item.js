Template.beer_item.helpers({
	image_url: function(){
		if (this.imageid){
			return "https://frahmework.ah.nl/!data/products/jpg/" + this.imageid + ".jpg";
		} else {
			return "http://placehold.it/100x100";
		}
	}
});

Template.beer_item.rendered = function(){
	$(".beer-glass-popover").popover( { html:true } );
}