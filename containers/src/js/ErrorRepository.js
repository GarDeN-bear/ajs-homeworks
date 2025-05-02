export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new 'Unknown error';
    }
    return this.errors.get(code);
  }

  addError(code, description) {
    this.errors.set(code, description);
  }
}
