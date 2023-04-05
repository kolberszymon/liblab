import { TheOneAPISDK } from "../src/index";
import dotenv from "dotenv";
dotenv.config();

const apiKey = "your-api-key";

if (!apiKey) {
  throw new Error("API key is required. Please provide a valid API key.");
}

describe("TheOneAPISDK", () => {
  let sdk: TheOneAPISDK;

  beforeEach(async () => {
    sdk = new TheOneAPISDK();
    await sdk.init(apiKey);
  });

  test("should instantiate without error", () => {
    expect(sdk).toBeInstanceOf(TheOneAPISDK);
  });

  test("getMovies() should return an array of movies", async () => {
    const movies = await sdk.getMovies();
    expect(movies).toBeInstanceOf(Array);
    expect(movies.length).toBeGreaterThan(0);
  });

  test("getMovie() should return a single movie", async () => {
    const movieId = "5cd95395de30eff6ebccde5c"; // Example movie ID
    const movie = await sdk.getMovie(movieId);
    expect(movie).toHaveProperty("_id", movieId);
  });

  test("getMovieQuotes() should return an array of quotes", async () => {
    const movieId = "5cd95395de30eff6ebccde5c"; // Example movie ID
    const quotes = await sdk.getMovieQuotes(movieId);
    expect(quotes).toBeInstanceOf(Array);
    expect(quotes.length).toBeGreaterThan(0);
  });
});
