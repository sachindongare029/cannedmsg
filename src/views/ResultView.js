var App = App || {};

App.views.ResultView = Backbone.View.extend({
  el: "#result__view",

  events: {},

  initialize: function() {
    _.bindAll(this, "render");
    this.render();
  },

  render: function() {
    var self = this;
    $.get("/src/templates/resultView.hbs", function(templateHtml) {
      var template = Handlebars.compile(templateHtml);
      var finalHtml = template();
      self.$el.html(finalHtml);
    });
    return self;
  }
});
