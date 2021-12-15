import getBuffer from '../js/functions/getBuffer';

import ArrayBufferConverter from '../js/classes/ArrayBufferConverter';

test('should read ArrayBuffer', () => {
  const buffer = getBuffer();
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(buffer);
  const result = bufferConverter.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
