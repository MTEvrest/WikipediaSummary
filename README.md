# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#NOTES

## Strings

All string are stores as constants in the 'strings' directory under a files respective string file. This is to make editing/localization and translation easier for larger projects

## Extra Components

The extra component added is the country selector option. Since the wikimedia api doesn't have a specific api for checking a date, project, and country, the api for checking a date and country was used, then the results were filtered to only inlude the english wikipedia page.

i.e. https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/US/all-access/2023/10/10
