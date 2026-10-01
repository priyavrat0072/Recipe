import axios from "axios";

/* fetching category list */
export const getCategoriesList = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
    );
    return response.data.meals;
  } catch (error) {
    console.log("Error in fetching categories", error);
  }
};

/* fetching ingredient list */
export const getIngredientList = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    );
    return response.data.meals;
  } catch (error) {
    console.log("Error in fetching ingredients", error);
  }
};

/* fetching area list */
export const getAreaList = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
    );
    return response.data.meals;
  } catch (error) {
    console.log("Error in fetching area", error);
  }
};

/* fetching recipe list based on user input */
export const searchRecipe = async (recipe) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`,
    );
    return response.data.meals || [];
  } catch (error) {
    console.log("Error in finding recipe", error);
    return []
  }
};

/* fetching recipe list based on categroy */
export const getCategoryBasedRecipe = async (category) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );
    console.log(response.data.meals);
  } catch (error) {
    console.log("Error in fetching recipe based on category", error);
  }
};

/* fetching recipe list based on ingredients */
export const getIngredientBasedRecipe = async (ingredient) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    console.log(response.data.meals);
  } catch (error) {
    console.log("Error in fetching recipe based on ingredient", error);
  }
};

/* fetching recipe list based on area */
export const getAreaBasedRecipe = async (area) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
    );
    console.log(response.data.meals);
  } catch (error) {
    console.log("Error in fetching recipe based on area", error);
  }
};

/* fetching recipe list based on mealId */
export const getMealIdBasedRecipe = async (mealId) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    );
    console.log(response.data.meals);
  } catch (error) {
    console.log("Error in fetching recipe by meal Id", error);
  }
};
