# The One API SDK

The One API SDK is a simple TypeScript library that provides an interface to interact with [The One API](https://the-one-api.dev/documentation). The SDK currently supports the `/movie`, `/movie/{id}`, and `/movie/{id}/quote` endpoints.

## Table of Contents

- [The One API SDK](#the-one-api-sdk)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)

## Requirements

- Node.js 12.x or later
- A valid API key from [The One API](https://the-one-api.dev/sign-up)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/the-one-api-sdk.git
```

2. Navigate to the project directory and install the dependencies:

```bash
cd the-one-api-sdk
yarn
```

## Usage

1. Import the TheOneAPISDK class:

```typescript
import { TheOneAPISDK } from "./the-one-api-sdk";
```

2. Initialize the SDK with your API key:

```typescript
const apiKey = "your-api-key-here";
const sdk = new TheOneAPISDK();
await sdk.init(apiKey);
```

3. Use the SDK to make requests to the API:

```typescript
// Get all movies
const movies = await sdk.getMovies();
console.log(movies);

// Get a specific movie by ID
const movieId = "5cd95395de30eff6ebccde5c"; // Example movie ID
const movie = await sdk.getMovie(movieId);
console.log(movie);

// Get quotes for a specific movie
const quotes = await sdk.getMovieQuotes(movieId);
console.log(quotes);
```

## Testing

To run the tests, use the following command:

```bash
yarn test
```
