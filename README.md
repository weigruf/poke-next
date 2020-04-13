# poke-next, a simple API fetching React mobile-friendly web app with basic pagination using Next.js

## To run the web app in dev mode:

-   `npm i` (first time you run the app)
-   `npm run dev`

## Development steps

### Initial installations

-   `mkdir poke-next`
-   `cd poke-next`
-   `npm init -y`
-   `npm i --save react react-dom next`
-   `mkdir pages`

### The following npm scripts were added in the package.json

```js

"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}

```

### Install TypeScript

-   `npm i --save-dev typescript @types/react @types/node`

### Install Sass

-   `npm i sass`

### Other notes

-   API: https://pokeapi.co/
-   Colour pallette: https://color.adobe.com/Japan-Dynamic-color-theme-4842572

### Main things for later (when there is more time)

-   Split down components into smaller components (atoms and molecules)
-   All the colours and other variables in shared style Sass files (placed in the styles dir)
-   Add Jest tests and a minimum test coverage of about 70%-80%
-   Enable PWA functionality with service workers
-   PWA means that you can also use the app offline and never display the downsaur :-)
-   Add a storybook / style guide for references of the colour and components used
-   Encapsulate the pagination logic into a custom hook and add more functionality to it
-   If the app needs more features (fetching pokemon details etc.), we can consider adding Redux store (with Thunks or Sagas)
