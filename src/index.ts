import axios, { AxiosInstance } from "axios";
import { Movie, MovieResponse } from "./models/movie";
import { Quote } from "./models/quote";

export class TheOneAPISDK {
  private axiosInstance: AxiosInstance;

  constructor() {}

  async init(apiKey: string): Promise<void> {
    if (!apiKey) {
      this.handleError(
        new Error("API key is required. Please provide a valid API key.")
      );
      return;
    }

    this.axiosInstance = axios.create({
      baseURL: "https://the-one-api.dev/v2",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    // Test API key with a request
    await this.axiosInstance.get("/movie").catch(() => {
      this.handleError(
        new Error("Invalid API key. Please provide a valid API key.")
      );
    });
  }

  // Error handler function
  private handleError(error: Error) {
    console.log("-----------------------------------");
    console.log("⚠️ An error occurred:");
    console.log(error.message);
    console.log("-----------------------------------");
  }

  private async request<T>(endpoint: string): Promise<T> {
    try {
      const response = await this.axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getMovies(): Promise<Movie[]> {
    const { docs } = await this.request<{ docs: Movie[] }>("/movie");
    return docs;
  }

  async getMovie(id: string): Promise<Movie> {
    try {
      const response = await this.axiosInstance.get<MovieResponse>(
        `/movie/${id}`
      );

      return response.data.docs[0]; // Return only the movie object
    } catch (error) {
      this.handleError(error);
      return null;
    }
  }

  public async getMovieQuotes(movieId: string): Promise<Quote[]> {
    const { docs } = await this.request<{ docs: Quote[] }>(
      `/movie/${movieId}/quote`
    );
    return docs;
  }
}
