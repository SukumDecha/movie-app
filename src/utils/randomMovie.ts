
export const getRandomMediaTitle = (type: string): string => {
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
  
  