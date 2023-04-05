# The One API SDK Design

This document provides an overview of the design of The One API SDK, a simple TypeScript library that provides an interface to interact with [The One API](https://the-one-api.dev/documentation). The SDK currently supports the `/movie`, `/movie/{id}`, and `/movie/{id}/quote` endpoints.

## Table of Contents

- [The One API SDK Design](#the-one-api-sdk-design)
  - [Table of Contents](#table-of-contents)
  - [Architecture](#architecture)
  - [Classes](#classes)
    - [TheOneAPISDK](#theoneapisdk)
      - [Properties](#properties)
      - [Methods](#methods)
  - [Methods](#methods-1)
    - [Error Handling](#error-handling)
  - [Testing](#testing)

## Architecture

The SDK follows a simple, single-class architecture that encapsulates all the API-related logic. It is designed to be easy to understand and use while providing a consistent interface for interacting with The One API.

## Classes

### TheOneAPISDK

This is the main class of the SDK and contains methods for making requests to The One API.

#### Properties

- `apiKey`: A private property that holds the API key required for authentication.

#### Methods

- `init(apiKey: string)`: Initializes the SDK with the provided API key and checks its validity.
- `getMovies()`: Fetches a list of all movies.
- `getMovie(movieId: string)`: Fetches a single movie by ID.
- `getMovieQuotes(movieId: string)`: Fetches a list of quotes for a specific movie.

## Methods

All methods in the SDK are asynchronous and return Promises. They use the `axios` package for making HTTP requests to The One API.

### Error Handling

Errors are thrown when there are issues with API requests or if the provided API key is invalid.

## Testing

The SDK is tested using Jest, a popular JavaScript testing framework. Test cases cover the main functionality of the SDK.
