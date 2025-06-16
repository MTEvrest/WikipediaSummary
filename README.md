# README

# Overview

This project contains a functional webapp that summarizes the top Wikipedia pages in a paginated table format. The search can be controlled by three criteria: date, number of results, and the country the search results are in. After changing the search criteria, the user would hit search again to repopulate the table.

# Brief Explanation of Code

## View Files

### App

This is the highest level component, and primarily responsible for setting up the React Context that becomes the basis for passing the info necessary for calling the api as well as then passing the resulting data to the results table.

### CountryPicker

This component is one of the three parameters available in the search bar, and lets user choose what country they want to see the top wikipedia articles for. In order to get all the country codes and names I imported the npm package country-list, https://www.npmjs.com/package/country-list/.

### DatePicker

This component is one of the three parameters available in the search bar, and lets users choose what date they want to use when searching top wikipedia articles. The calender component itself is an import from AWS's public component library Cloudscape, https://cloudscape.design/, imported using npm.

###  MostViewed

This is the pimary component for this app, and is the parent of the search bar, result table, and table pagination. The pagination component is imported from the package 'react-paginate', https://www.npmjs.com/package/react-paginate. 

### ResultCard

This component displays a single top viewed page result on the table and includes rank, name, and number of page views.

### ResultPicker

This component is one of the three parameters available in the search bar and lets users choose how many results are available in the table overall via a dropdown.

### SearchBar

This component is responsible for holding the three search parameters, as well as for calling the api to get the table results. To prevent a large amount of prop drilling, the api parameters are stored and updated via context, as well as the resulting api results that will be populated in the table.

## Custom Hooks

### useGetMostViewed

This calls the api for getting a summary of the top viewed Wikipedia articles. Using promise chaining within a useEffect, this custom hook is responsible for communicating any loading or error states, as well as eventually returning the data recieved from the api call if it succeeds.

## Strings

All string are stores as constants in the 'strings' directory under a files respective string file. This is to make editing/localization and translation easier for larger projects

# Things to Improve

## Design

The current design is very simple and straightforward. While there's nothing necessary wrong with it, a more delebritate stylek, perhaps even one that evokes a similar feeling to wikipedia itself, would help users make a mental connection of that this product is for at just a glance. In addition, creating custom pagination and calendar component would allow for greater creative control in how those elements blend in with the app as a whole.

## Functionality

With regards to the results themselves, it would be helpful to allow users to click on each result and read a short summary of the related wikipedia page, as well as have a link that the page itself if they wanted to read further. As for the wider table, a more appropriate empty table can be created when there are no results available, but also no associated api error. At the moment it is just a blank space with the search bar on top. Finally, a there can be a greater degree of control when it comes to the search parameters and results, specifically allowing users to type in the country they want rather than pick from a dropdown, and letting using decide how many results appear on a single page, not just the overall table.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running for the first time

Make sure you have node installed\
Run `npm install` to generate node_modules.\
Run `npm start` \

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

