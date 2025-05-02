import Settings from '../Settings';


describe('Settings', () => {
  let settings;
  let userSettings =
      [{setting: 'theme', value: 'light'}, {setting: 'music', value: 'pop'}];
  let combinedSettings = [
    {setting: 'theme', value: 'light'}, {setting: 'music', value: 'pop'},
    {setting: 'difficulty', value: 'easy'}
  ];

  beforeEach(() => {
    settings = new Settings();
  });

  test('Set user settings', () => {
    userSettings.forEach(setting => {
      settings.setSettings(setting.setting, setting.value);
    });
    userSettings.forEach(setting => {
      expect(settings.userSettings.get(setting.setting)).toEqual(setting.value);
    });
  });

  test('Get settings', () => {
    userSettings.forEach(setting => {
      settings.setSettings(setting.setting, setting.value);
    });

    combinedSettings.forEach(
        setting => {expect(settings.settings.get(setting.setting))
                        .toEqual(setting.value)});
  });
});