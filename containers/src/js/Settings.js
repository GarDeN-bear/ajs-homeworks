export default class Settings {
  constructor() {
    this.defaultSettings = new Map(
        [['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.userSettings = new Map();
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }

  setSettings(setting, value) {
    this.userSettings.set(setting, value);
  }
}
