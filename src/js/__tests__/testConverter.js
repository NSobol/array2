import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('Метод load принимает буфер', () => {
  const arrayBufer = new ArrayBufferConverter();
  const buffer = getBuffer();
  arrayBufer.load(buffer);
  expect(arrayBufer.bufferView).toBeInstanceOf(Uint16Array);
});

test('Метод toString декодирует строку', () => {
  const testString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const arrbuf = new ArrayBufferConverter();
  const buffer = getBuffer();
  arrbuf.load(buffer);
  expect(arrbuf.toString()).toBe(testString);
});