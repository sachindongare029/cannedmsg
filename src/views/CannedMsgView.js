var App = App || {};

App.views.CannedMsgView = Backbone.View.extend({
  el: "#root",

  events: {},

  initialize: function() {
    _.bindAll(this, "render");
    this.render();
  },

  render: function() {
    var self = this;
    $.get("/src/templates/cannedMsg.hbs", function(templateHtml) {
      var template = Handlebars.compile(templateHtml);
      var finalHtml = template();
      self.$el.html(finalHtml);
      self.renderFilterView();
    });
    return self;
  },

  renderFilterView: function() {
    new App.views.FilterView();
  }
});
