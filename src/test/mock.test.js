import { handleMockResponse } from '../mocks/movies-mock-response-handler';

test('Prueba de Service mock', () => {
  let data = handleMockResponse('game');
  expect(data[0].Title).toBe('Game of Thrones');
});
