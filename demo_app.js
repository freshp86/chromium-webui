Polymer({
  is: 'demo-app',

  properties: {
    elements: {
      type: Array,
      value: function() {
        return [
          'cr_elements/cr_toggle',
          'cr_elements/cr_toast',
          'cr_elements/cr_dialog',
        ];
      },
    },

    currentSrc: String,
  },

  onItemClick_: function(e) {
    this.currentSrc = `src/${e.model.item}/demo.html`;
    console.log('item', e.model.item);
  },
});
