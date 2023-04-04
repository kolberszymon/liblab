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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheOneAPISDK = void 0;
const axios_1 = __importDefault(require("axios"));
class TheOneAPISDK {
    constructor(apiKey) {
        if (!apiKey) {
            throw new Error("API key is required. Please provide a valid API key.");
        }
        this.axiosInstance = axios_1.default.create({
            baseURL: "https://the-one-api.dev/v2",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
        });
    }
    request(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.axiosInstance.get(endpoint);
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            const { docs } = yield this.request("/movie");
            return docs;
        });
    }
    getMovie(movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request(`/movie/${movieId}`);
        });
    }
    getMovieQuotes(movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { docs } = yield this.request(`/movie/${movieId}/quote`);
            return docs;
        });
    }
}
exports.TheOneAPISDK = TheOneAPISDK;
//# sourceMappingURL=index.js.map