Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('recipes', {
  	path: '/'
  	// waitOn: function() { return Meteor.subscribe('recipes'); }
  });
});
