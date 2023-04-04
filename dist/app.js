"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const index_1 = require("./index");
// Replace 'your-api-key-here' with your actual API key
const apiKey = "your-api-key-here";
const sdk = new index_1.TheOneAPISDK(apiKey);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Get all movies
            const movies = yield sdk.getMovies();
            console.log("Movies:", movies);
            // Get a specific movie by ID
            const movieId = "5cd95395de30eff6ebccde5c"; // Example movie ID
            const movie = yield sdk.getMovie(movieId);
            console.log("Movie:", movie);
            // Get movie quotes by movie ID
            const quotes = yield sdk.getMovieQuotes(movieId);
            console.log("Quotes:", quotes);
        }
        catch (error) {
            console.error("Error:", error.message);
        }
    });
}
main();
//# sourceMappingURL=app.js.map