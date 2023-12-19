export const API_OPTIONS = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    // Authorization: "Bearer"+ process.env.REACT_APP_TMDB_KEY,
    Authorization : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmVhYzBiM2E3Yjc1NDE2ODA1OWI5NjlkOTJjYmIyNSIsInN1YiI6IjY1N2MwNDRkMTc2YTk0MTczNDAxMjc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q0CuD1y_c-5r88b6t2ZnxrzRrIzVW9TX9brqLWtLQbQ",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
{identifier: "en",name:"English"},
{identifier: "hindi",name:"Hindi"},
{identifier: "japanese",name:"Japanese"},
{identifier: "korean",name:"Korean"}];

// export const OPEN_API = process.env.REACT_APP_OPEN_API ;
// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const OPENAI_KEY = "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";
