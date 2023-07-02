import { generarID } from '../utils';

test('Prueba de generadir de IDs randoms', () => {
  let data = generarID('game');
  expect(data.length).toBe(6);
});
