Polymer({
  is: 'cr-toast-demo',

  properties: {
    message: {
      type: String,
      value: 'Hello toast!',
    },
  },

  onShow_: function() {
    this.$$('cr-toast').show();
  },

  onHide_: function() {
    this.$$('cr-toast').hide();
  },
});
