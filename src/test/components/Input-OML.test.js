/**
 * @jest-environment jsdom
 */
import { InputOML } from '../../components/Input/Input-OML';

test('Prueba de random', () => {
  const inputOML = new InputOML();
  let data = document.createElement('div');
  data.appendChild(inputOML);
  data.textContent = 'prueba';
  expect(inputOML).toBeDefined();
});
