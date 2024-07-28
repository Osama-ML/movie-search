/**
 * @jest-environment jsdom
 */
import { SearchOML } from '../../components/Search/Seach-OML';
import { test, expect } from '@jest/globals';

test('Test search component to be defined in DOM', () => {
  const searchOML = new SearchOML();
  let data = document.createElement('div');
  data.appendChild(searchOML);
  let newComponent = data.querySelector('search-oml');
  expect(newComponent).toBeDefined();
});
