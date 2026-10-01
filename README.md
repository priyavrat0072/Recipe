# Recipe Finder

A simple recipe finder application built with React.js and TheMealDB API.
Users can search for recipes, filter recipes by category, ingredient, and area, and view detailed information about each recipe.

# Features

* Search recipes by name
* Filter recipes by category
* Filter recipes by ingredient
* Filter recipes by area
* Apply multiple filters together
* View recipe details
* View ingredients and measurements
* View cooking instructions
* Watch recipe videos when available
* Loading state while fetching recipes
* Custom message when no recipes are found
* Responsive design

# Technologies Used

* React.js
* JavaScript
* Tailwind CSS
* React Router
* Axios
* React Select
* TheMealDB API
* Vite

# How It Works

1. Recipes are fetched from TheMealDB API.
2. Users can search for recipes using the search bar.
3. Users can filter recipes by:

   * Category
   * Ingredient
   * Area
4. The selected filters are stored in the URL.
5. Matching recipes are displayed as recipe cards.
6. Clicking a recipe opens its detailed recipe page.

# A Test case flow
1. search rice
2. search seafood in category
3. search saffron
4. search spain in area
5. User will see spanish seafood rice
6. On card click or view details user will see recipe details page
7. On recipe page image , ingredients and measurements ,instructions tabs 
8. Two buttons go back and watch recipe video if video available 


# API

This project uses the TheMealDB API to fetch recipe data.
API: https://www.themealdb.com/


