Meteor.methods({
	findRecipes: function(terms) {
		check(terms, String);
  		this.unblock();
  		try {
			response = HTTP.get("https://frahmework.ah.nl/!ahpi/recepten.php", { params: { recepttag1: terms, ahpikey: "1J2PF1C6MPHctwjBGJY8w86kv7f38gsp" } });
			return JSON.parse(response.content);
		} catch(e) {
			throw new Meteor.error(e.status_code);
		}
	},
	findRandomBeers: function() {
		this.unblock();
		try {
			response = HTTP.get("https://frahmework.ah.nl/!ahpi/artikelinfo.php", { params: { artikelomschrijving: "bier", ahpikey: "1J2PF1C6MPHctwjBGJY8w86kv7f38gsp" } });
			return JSON.parse(response.content);
		} catch(e) {
			throw new Meteor.error(e.status_code);
		}
	}
});