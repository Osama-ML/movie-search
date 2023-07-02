/**
 * @jest-environment jsdom
 */
import { InputOML } from '../../components/Input/Input-OML';

test('Test input component to be defined in DOM', () => {
  const inputOML = new InputOML();
  let data = document.createElement('div');
  data.appendChild(inputOML);
  let newComponent = data.querySelector('input-oml');
  expect(newComponent).toBeDefined();
});
