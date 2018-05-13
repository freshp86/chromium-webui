Polymer({
  is: 'cr-toggle-demo',

  properties: {
    toggleStates_: {
      type: Array,
      value: function() {
        return [
          {disabled: false, checked: true},
          {disabled: false, checked: false},
          {disabled: true, checked: true},
          {disabled: true, checked: false},
        ];
      },
    },
  },
});
