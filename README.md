# Pokedex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

This is just a demonstration project to show the capabilities of Universal.

#### Used packages:
- Angular Universal
- Angular Material
- Angular CDK (Virtual Scroll)

Fake data comes primarily from [pokemon.json](https://github.com/fanzeyi/pokemon.json), which uses data from other sources (see the backend README).
This project copies the files directly from the library instead of importing the library, just to use them to serve data and images via json-server more easily.

## Backend

Run `npm run backend` for a dev backend.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server (Universal)

Run `ng run dev:ssr` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
