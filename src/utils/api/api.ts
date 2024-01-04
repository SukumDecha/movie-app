import { getRandomMediaTitle } from "../randomMovie";
import MovieProps from "../types/MovieProps";

const cachedMovie: MovieProps[] = [];

const apiKey = "92de39b3";
// const apiKey = "26b7e602";

interface OMDBApiSearchResponse {
  Response: 'True' | 'False';
  Error?: string;
  Search?: MovieProps[];
  
}

export const fetchByName = async (
  name: string,
  category?: string
): Promise<MovieProps> => {
  if (!name) {
    throw new Error("Invalid Title");
  }
  try {
    let data: any = cachedMovie.find((m) => m.Title === name);

    if (data) {
      return data;
    }

    const response = await fetch(
      `http://www.omdbapi.com/?t=${encodeURIComponent(
        name
      )}&type=${category}&plot=full&apikey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    data = await response.json();

    if (data && data.Response === "True") {
      if (cachedMovie.some((m) => m.Title !== data.Title)) {
        cachedMovie.push(data);
      }

      return data; // Return the movie data
    } else {
      console.log(name);
      throw new Error(`Error: ${data.Error}`);
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};


export const fetchById = async (
  id: string,
  category?: string
): Promise<MovieProps> => {
  if (!id) {
    throw new Error("Invalid IMDb ID");
  }
  try {
    let data: any = cachedMovie.find((m) => m.imdbID === id);

    if (data) {
      return data;
    }

    const response = await fetch(
      `http://www.omdbapi.com/?i=${encodeURIComponent(
        id
      )}&type=${category}&plot=full&apikey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    data = await response.json();

    if (data && data.Response === "True") {
      if (cachedMovie.some((m) => m.imdbID !== data.imdbID)) {
        cachedMovie.push(data);
      }

      return data; 
    } else {
      console.log(name);
      throw new Error(`Error: ${data.Error}`);
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error; 
  }
};

export const fetchRandomMovie = async (
  amount: number,
  category: string
): Promise<MovieProps[]> => {
  const movieList: MovieProps[] = [];

  for (let i = 0; i < amount; i++) {
    try {
      let movie = await fetchByName(getRandomMediaTitle(category), category);
      while (movieList.some((m) => m.Title === movie.Title)) {
        movie = await fetchByName(getRandomMediaTitle(category), category);
      }

      movieList.push(movie);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }

  return movieList;
};

export const searchByName = async (name: string): Promise<MovieProps[]> => {
  if (!name) {
    throw new Error("Invalid title");
  }

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${encodeURIComponent(name)}&apikey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data: OMDBApiSearchResponse = await response.json();

    if (data && data.Response === 'True') {
      return data.Search || []; // Return the movie data or an empty array if not found
    } else {
      throw new Error(`Error: ${data.Error}`);
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};