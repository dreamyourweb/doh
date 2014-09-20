// Meteor.methods({
// 	getBeerGlass: function(type) {
// 		check(terms, String);
//   		this.unblock();
//   		try {
// 			response = HTTP.get('https://api.bol.com/catalog/v4/search/', { params: { apikey:'DDEDE21AA85B4F1F9A3FA2F5F2156077', q: 'bierglazen', format:'json', limit:100, offset :100 } } );
// 			products = JSON.parse(response.content);
// 			return products
// 		} catch(e) {
// 			throw new Meteor.error(e.status_code);
// 		}

// 	}
// });