export default class ArrayBufferConverter {
  constructor() {
  }
  load(buffer) {
    this.buffer = buffer;
  }
  toString() {
    const bufferView = new Uint16Array(this.buffer);
    let stringView = '';
    for (let i = 0; i < bufferView.length; i++) {
      stringView += String.fromCharCode(bufferView[i]);
    }
    return stringView
  }
}
