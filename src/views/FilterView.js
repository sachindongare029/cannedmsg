var App = App || {};

App.views.FilterView = Backbone.View.extend({
  el: "#filter__view",

  events: {
    "click #create_new": "newCannedMsg"
  },

  initialize: function() {
    _.bindAll(this, "render");
    this.render();
  },

  render: function() {
    var self = this;
    $.get("/src/templates/filterView.hbs", function(templateHtml) {
      var template = Handlebars.compile(templateHtml);
      var finalHtml = template();
      self.$el.html(finalHtml);
    });
    return self;
  },
  newCannedMsg: function() {
    new App.views.NewCannedMsgModal().show();
  }
});
