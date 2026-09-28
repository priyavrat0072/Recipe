import axios from "axios";

export const getCategoriesList = async () => {
  try {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list",
    );
    console.log(response.data.meals);
  } catch (error) {
    console.log("Error in fetching categories", error);
}
};

export const getRecipe = async (searchRecipe) =>{
  console.log(`searchRecipe : ${searchRecipe}`)
  try{
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchRecipe}`
    )
    console.log(response.data.meals)
  }catch(error){
    console.log("Error in finding recipe",error)
  }
}


