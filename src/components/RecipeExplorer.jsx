import { useEffect, useState } from "react";
import { searchRecipe } from "../services/recipeAPI";
import RecipeFilter from "./RecipeFilter";

const RecipeExplorer = ({searchedRecipe , setSearchedRecipe , inputRecipe, setInputRecipe}) => {
  // const [inputRecipe, setInputRecipe] = useState("");
  // const [searchedRecipe , setSearchedRecipe] = useState([])


  // useEffect(()=>{
  //   const loadinitialRecipe = async () => {
  //     const data = await searchRecipe("")
  //     // console.log(`data : ${data}`)
  //     setSearchedRecipe(data)
  //   }
  //   loadinitialRecipe()
  // },[])

  const handleSearch = async() => {
    let searchRecipeData = await searchRecipe(inputRecipe)

    // console.log("searchRecipe returned:", searchRecipeData);

    setSearchedRecipe(searchRecipeData)
  
  };

  return (
    <div className="bg-mauve-900 w-full min-h-screen ">
      <div className="p-5 flex justify-center">

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search recipes..."
            value={inputRecipe}
            className="w-full rounded-lg border border-zinc-300 bg-white py-3 pl-4 pr-12 text-sm outline-none focus:border-zinc-500"
            onChange={(e) => setInputRecipe(e.target.value)}
          />

          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 hover:bg-zinc-100"
            onClick={handleSearch}
          >
            {" "}
            🔍
          </button>
        </div>
      </div>
      <div>
        <RecipeFilter searchedRecipe = {searchedRecipe} />
      </div>
    </div>
  );
};
export default RecipeExplorer;
