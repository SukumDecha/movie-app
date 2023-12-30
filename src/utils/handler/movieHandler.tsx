import MovieProps from "../types/MovieProps";

// const apiKey2 = "92de39b3";
const apiKey = "26b7e602";
export const fetchByName = async (name: string): Promise<MovieProps> => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${encodeURIComponent(name)}&apikey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    if (data.Response === "True") {
      return data; // Return the movie data
    } else {
      throw new Error(`Error: ${data.Error}`);
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error; // Rethrow the error to be handled by the calling code
  }
};
// ...

export const fetchRandomMovies = async (
  amount: number
): Promise<MovieProps[]> => {
  const movieList: MovieProps[] = [];

  for (let i = 0; i < amount; i++) {
    try {
      let movie = await fetchByName(getRandomTitle());
      while (movieList.some((m) => m.Title === movie.Title)) {
        movie = await fetchByName(getRandomTitle());
      }

      movieList.push(movie);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }

  return movieList;
};

// ...
const getRandomTitle = (): string => {
  const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Star war 9",
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
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
};
