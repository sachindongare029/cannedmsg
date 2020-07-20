var App = App || {};

App.views.ResultView = Backbone.View.extend({
  el: "#result__view",

  events: {},

  initialize: function () {
    _.bindAll(this, "render");
    this.render();
  },

  render: function () {
    var demoJson = [
      {
        name: "Brand Logo",
        createdBy: "Me",
        status: "Active",
        actions: ["view", "edit"],
      },
      {
        name: "Brand Marketing Visuals",
        createdBy: "Mikimoto",
        status: "Active",
        actions: ["edit"],
      },
      {
        name: "Brand Bio",
        createdBy: "Matt",
        status: "Inactive",
        actions: ["view"],
      },
    ];
    var self = this;
    $.get("/src/templates/resultView.hbs", function (templateHtml) {
      var template = Handlebars.compile(templateHtml);
      var finalHtml = template();
      self.$el.html(finalHtml(demoJson));
    });
    return self;
  },
});
