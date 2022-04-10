import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    // для более полного понимания
    let str = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      str += String.fromCharCode(this.bufferView[i]);
    }
    return str;
  }
}