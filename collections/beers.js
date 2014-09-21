Beers = new Meteor.Collection('beers');

Beers.helpers({

  recommendedGlass: function() {
  	beer_type = this.bierType;
  	
    if (beer_type=='bock' | beer_type=='amber'){ beer_type='trappist'}
    if (beer_type=='weizen'){ beer_type='Spiegelau Vino Grande Witbierglas'}
    if (beer_type=='lambiek' | beer_type=='dubbel'){ beer_type='ice tea'}
    if (beer_type=='tripel'){ beer='Durobor Triomphe Bierglas op voet - 45 cl - Set van 6'}

    return BeerGlasses.findOne( { '$or': [ { title: new RegExp(beer_type, "i") }, { longDescription: new RegExp(beer_type, "i") } ] } );

  }

});

