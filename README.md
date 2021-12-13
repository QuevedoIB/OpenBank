## Setup the project

Clone de Repo

```
git clone git@github.com:QuevedoIB/OpenBank.git

cd ./OpenBank

npm install

```

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npx cypress run`

Execute integration tests

### `npm run cypress:open`

Execute integration tests in VM

## Dependencies

    "@reduxjs/toolkit" | "1.6.2" | Standard library used to bootstrap the redux config and reduce the amount of boilerplate needed.
    "axios" | "^0.24.0" | Http client for data fetching that handles some common actions (data parsing, request progres...)
    "formik" | "2.2.9" | Library that handles form control and easily combines with Yup for validations.
    "i18next": "20.4.0"
    "i18next-browser-languagedetector" | "^6.1.2"
    "node-sass" | "6.0.1"
    "react" | "17.0.2"
    "react-dom" | "17.0.2"
    "react-i18next" | "10.13.2" | React bindings for i18next.
    "react-icons" | "^4.3.1" | Svg icons library.
    "react-query" | "3.21.0" | Query caching library.
    "react-redux" | "^7.2.6" | React bindings for redux.
    "react-router-dom" | "6.0.2" | Standard routing library for react applications.
    "vite-plugin-react-svg" | "^0.2.0" | Vite plugin to use svg as React components.
    "yup" | "0.32.11" | Schemas builder that can easily be injected into formik forms.

## Project structure

```

src
|
|
|___ assets
|   |   favicon.ico
|   |
|   |___ img
|
|___ components
|   |
|   |
|   |___ common
|   |___ forms
|
|___ hooks
|
|
|___ locale
|
|
|___ pages
|       CreatePassword
|
|___ redux
|   |  store.js
|   |
|   |___ reducers
|
|
|___ services
|       CreatePassword.js
|
|___ styles

```
