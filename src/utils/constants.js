export const API_OPTIONS = {
    method:'GET',
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmVhYzBiM2E3Yjc1NDE2ODA1OWI5NjlkOTJjYmIyNSIsInN1YiI6IjY1N2MwNDRkMTc2YTk0MTczNDAxMjc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q0CuD1y_c-5r88b6t2ZnxrzRrIzVW9TX9brqLWtLQbQ',
  }
}
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));