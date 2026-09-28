import { useEffect, useState } from "react";
import { getCategoriesList , searchRecipe , getCategoryBasedRecipe ,getIngredientBasedRecipe ,getAreaBasedRecipe ,getMealIdBasedRecipe } from "./services/recipeAPI";

const App = () => {

  const [recipeInput , setRecipeInput] = useState("")
  const [search , setSearch] = useState("")

  const [categoryBasedSearchRecipeInput , setCategoryBasedSearchsetRecipeInput] = useState("")
  const [categoryBasedSearch , setCategoryBasedSearch] = useState("")

  const [ingredientBasedSearchRecipeInput , setIngredientBasedSearchRecipeInput] = useState("")
  const [IngredientBasedSearch , setIngredientBasedSearch] = useState("")

  const [areaBasedSearchRecipeInput , setAreaBasedSearchRecipeInput] = useState("")
  const [areaBasedSearch ,setAreaBasedSearch] = useState("")

  const [mealIdBasedSearchRecipeInput , setMealIdBasedSearchRecipeInput] = useState("")
  const [mealIdBasedSearch , setMealIdBasedSearch] = useState("")

  useEffect(() => {
    if(search != ""){
      searchRecipe(search)
    }
  }, [search]);

  useEffect(()=>{
    getCategoriesList();
  },[])

  useEffect(()=>{
      if(categoryBasedSearch != ""){
        getCategoryBasedRecipe(categoryBasedSearch)
      } 
  },[categoryBasedSearch])

    useEffect(()=>{
      if(IngredientBasedSearch != ""){
        getIngredientBasedRecipe(IngredientBasedSearch)
      } 
  },[IngredientBasedSearch])

  useEffect(() =>{
    if(areaBasedSearch != ""){
      getAreaBasedRecipe(areaBasedSearch)
    }
  },[areaBasedSearch])

    useEffect(() =>{
    if(mealIdBasedSearch != ""){
      getMealIdBasedRecipe(mealIdBasedSearch)
    }
  },[mealIdBasedSearch])







  const handleSearch=()=>{
    setSearch(recipeInput)
    // console.log(search)
  }

  const handleCategoryBasedSearch=()=>{ 
    setCategoryBasedSearch(categoryBasedSearchRecipeInput)
    // console.log(categoryBasedSearch)
  }

  const handleIngredientBasedSearch = () =>{
    setIngredientBasedSearch(ingredientBasedSearchRecipeInput)
    // console.log(IngredientBasedSearch)
  }

  const handleAreaBasedSearchRecipeInput =() =>{
    setAreaBasedSearch(areaBasedSearchRecipeInput)
    console.log(areaBasedSearch)
  }

  const handleMealIdBasedSearchRecipeInput =() =>{
    setMealIdBasedSearch(mealIdBasedSearchRecipeInput)
    console.log(mealIdBasedSearch)
  }

  


  return (
    <div>
      <div>Recipe Finder</div>
      <div>
        <input type="text" value={recipeInput} placeholder="Search your favorite recipes..." onChange={(e)=>setRecipeInput(e.target.value)}/>
        <button onClick={handleSearch}>Search Recipe</button>
      </div>

      <div>
        <input type="text" value={categoryBasedSearchRecipeInput} placeholder="Search your favorite recipes..." onChange={(e)=>setCategoryBasedSearchsetRecipeInput(e.target.value)}/>
        <button onClick={handleCategoryBasedSearch}>Search Recipe based on category</button>
      </div>

      <div>
        <input type="text" value={ingredientBasedSearchRecipeInput} placeholder="Search your favorite recipes..." onChange={(e)=>setIngredientBasedSearchRecipeInput(e.target.value)}/>
        <button onClick={handleIngredientBasedSearch}>Search Recipe based on ingredient</button>
      </div>

      <div>
        <input type="text" value={areaBasedSearchRecipeInput} placeholder="Search your favorite recipes..." onChange={(e)=>setAreaBasedSearchRecipeInput(e.target.value)}/>
        <button onClick={handleAreaBasedSearchRecipeInput}>Search Recipe based on area</button>
      </div>

       <div>
        <input type="text" value={mealIdBasedSearchRecipeInput} placeholder="Search your favorite recipes..." onChange={(e)=>setMealIdBasedSearchRecipeInput(e.target.value)}/>
        <button onClick={handleMealIdBasedSearchRecipeInput}>Search Recipe based on mealId</button>
      </div>

    </div>
  );
};
export default App;
