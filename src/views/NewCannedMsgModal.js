var App = App || {};

App.views.NewCannedMsgModal = Backbone.View.extend({
  id: "new-msg-modal",
  className: "modal fade hide",

  events: {
    hidden: "close"
  },

  initialize: function() {
    _.bindAll(this, "show", "close", "render", "renderView");
    this.render();
  },

  show: function() {
    this.$el.modal("show");
  },

  close: function() {
    this.$el.data("modal", null);
    this.remove();
  },

  render: function() {
    var self = this;
    $.get("/src/templates/newCannedMsgModal.hbs", function(templateHtml) {
      var template = Handlebars.compile(templateHtml);
      self.renderView(template);
      $("#modal_content").html();
    });
    return self;
  },

  renderView: function(template) {
    var self = this;
    self.$el.html(template());
    self.$el.modal({ show: false });
  }
});
