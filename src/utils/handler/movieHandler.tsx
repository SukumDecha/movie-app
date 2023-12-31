import MovieProps from "../types/MovieProps";

const cachedMovie: MovieProps[] = [];

// const apiKey2 = "92de39b3";
const apiKey = "26b7e602";

export const fetchByName = async (
  name: string,
  category?: string
): Promise<MovieProps> => {
  if (!name) {
    throw new Error("Invalid IMDb ID");
  }
  try {
    let data: any = cachedMovie.find((m) => m.Title === name);

    if (data) {
      return data;
    }

    const response = await fetch(
      `http://www.omdbapi.com/?t=${encodeURIComponent(
        name
      )}&type=${category}&apikey=${apiKey}`
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
const getRandomMediaTitle = (type: string): string => {
  const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Star Wars",
    "Schindler's List",
    "Fight Club",
    "Forrest Gump",
    "Inception",
    "The Matrix",
    "The Silence of the Lambs",
    "The Green Mile",
    "The Godfather: Part II",
    "The Shawshank Redemption",
    "The Dark Knight Rises",
    "Maze Runner",
    "The Matrix Reloaded",
    "The Matrix Revolutions",
    "The Avengers",
    "Titanic",
  ];

  const tvSeries = [
    "Breaking Bad",
    "Stranger Things",
    "Game of Thrones",
    "The Crown",
    "The Mandalorian",
    "The Witcher",
    "Friends",
    "The Simpsons",
    "Black Mirror",
    "Westworld",
    "Fargo",
    "The Office",
    "The Walking Dead",
    "Sherlock",
    "Narcos",
    "Money Heist",
    "The Big Bang Theory",
    "Peaky Blinders",
    "Vikings",
    "Dark",
  ];

  const mediaArray = type === "movie" ? movies : tvSeries;

  if (mediaArray.length === 0) {
    return "Inter"; // No titles available
  }

  const randomIndex = Math.floor(Math.random() * mediaArray.length);
  return mediaArray[randomIndex];
};

// Example usage:
const randomMovieTitle = getRandomMediaTitle("movie");
console.log(randomMovieTitle);
