// init file

export const init = {
  buttons: [
    { name: 'Perfect ryhme', active: true, value: 'rel_rhy=', enabled: 'true' },
    { name: 'Sounds like', active: false, value: 'sl=', enabled: 'true' },
    { name: 'Same meaning', active: false, value: 'ml=', enabled: 'true' },
    {
      name: 'Describe [adj]',
      active: false,
      value: 'rel_jjb=',
      enabled: 'true'
    },
    {
      name: 'Describe [noun]',
      active: false,
      value: 'rel_jja=',
      enabled: 'true'
    }
  ],

  defaultCount: 6,

  getInitValues() {
    return this.buttons.filter(x => x.active).map(x => x.value);
  }
};
