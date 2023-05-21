import movies from './movie-mock-response.json';
import tvSeries from './tv-serie-mock-response.json';

export function handleMockResponse(titleToFind = '') {
  if (findElement(titleToFind) && titleToFind !== '') {
    const elementsResponse = returnFilteredElements(titleToFind);
    return elementsResponse;
  }
  return [];
}

function findElement(titleToFind) {
  let titles = [];
  movies.Search.map((el) => titles.push(el.Title));
  tvSeries.Search.map((el) => titles.push(el.Title));
  let response = titles.some((el) => el.toLowerCase().includes(titleToFind.toLowerCase()));
  return response;
}

function returnFilteredElements(titleToFind) {
  let result = [];
  movies.Search.map((movie) => {
    if (
      movie.Title.toLowerCase().includes(titleToFind.toLowerCase()) ||
      movie.Title.toLowerCase() === titleToFind.toLowerCase()
    ) {
      result.push(movie);
    }
  });
  tvSeries.Search.map((tvSerie) => {
    if (
      tvSerie.Title.toLowerCase().includes(titleToFind.toLowerCase()) ||
      tvSerie.Title.toLowerCase() === titleToFind.toLowerCase()
    ) {
      result.push(tvSerie);
    }
  });
  return result;
}
