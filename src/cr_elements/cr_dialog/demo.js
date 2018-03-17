Polymer({
  is: 'cr-dialog-demo',

  properties: {
    showFooter_: Boolean,
    disableActionButton_: Boolean,
  },

  onShowDialog_: function() {
    this.$.dialog.showModal();
  },

  onOk_: function() {
    this.$.dialog.close();
  },

  onCancel_: function() {
    this.$.dialog.cancel();
  },
});
