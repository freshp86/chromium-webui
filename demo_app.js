Polymer({
  is: 'demo-app',

  properties: {
    elements: {
      type: Array,
      value: function() {
        return [
          'cr_elements/cr_dialog',
          'cr_elements/cr_toast',
          'cr_elements/cr_toggle',
        ];
      },
    },

    currentSrc: String,
  },

  onDomChange_: function() {
    this.setSelected_(this.$.sidebar.querySelector('button'));
  },

  onItemClick_: function(e) {
    this.setSelected_(e.target);
  },

  setSelected_: function(element) {
    this.currentSrc = `src/${element.dataset.path}/demo.html`;
    let selected = this.$.sidebar.querySelector('button[selected]');
    if (selected)
      selected.removeAttribute('selected');
    element.setAttribute('selected', '');
  },
});
