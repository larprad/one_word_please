// init file

export const init = {
  buttons: [
    { name: 'Ryhme', active: false, value: 'rel_rhy=', enabled: 'true' },
    { name: 'Sounds like', active: false, value: 'sl=', enabled: 'true' },
    { name: 'Same meaning', active: true, value: 'rel_syn=', enabled: 'true' },
    {
      name: 'Describe',
      active: false,
      value: 'rel_jjb=',
      enabled: 'true'
    },
    {
      name: 'Antonym',
      active: false,
      value: 'rel_ant=',
      enabled: 'true'
    }
  ],

  defaultCount: 6,

  getInitValues() {
    return this.buttons.filter(x => x.active).map(x => x.value);
  }
};
