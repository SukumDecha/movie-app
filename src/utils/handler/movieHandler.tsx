import MovieProps from "../types/MovieProps";

const apiKey2 = "92de39b3";
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

export const fetchRandomMovies = async (): Promise<MovieProps[]> => {
  try {
    const key = getRandomText();

    console.log("Search Key:", key);
    const response = await fetch(
      `http://www.omdbapi.com/?s=${encodeURIComponent(
        key
      )}&page=1&r=json&apikey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    console.log("Array", data);

    if (data.Response === "True" && data.Search) {
      // Shuffle the array to randomize the order
      const shuffledMovies = data.Search.sort(() => Math.random() - 0.5);

      // Take only the first 5 movies
      const randomMovies = shuffledMovies.slice(0, 5);

      return randomMovies;
    } else {
      throw new Error(`Error: `);
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};

// ...
const getRandomText = (): string => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomIndex = Math.floor(Math.random() * alphabets.length);
  return alphabets[randomIndex];
};
