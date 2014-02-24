
/*global footer configuration*/
Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
      'footer': {to: 'footer'},
      'header': {to: 'header'}
    },


});

/* Mapa */
Router.map(function () {
  this.route('home',{
  path: '/',
  });
});







