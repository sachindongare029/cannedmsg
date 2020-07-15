var App = App || {};

App.Router = Backbone.Router.extend({
  routes: {
    '': 'cannedMsg'
  },

  cannedMsg: function() {
    new App.views.CannedMsgView();
  }
});
