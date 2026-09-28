import { useEffect, useState } from "react";
import { getCategoriesList , getRecipe } from "./services/recipeAPI";

const App = () => {

  const [search , setSearch] = useState([])
  const [recipeInput , setRecipeInput] = useState([])


  useEffect(() => {
    if(search != ""){
      getRecipe(search)
    }
  }, [search]);

  useEffect(()=>{
    getCategoriesList();
  },[])

  const handleSearch=()=>{
    setSearch(recipeInput)
    console.log(search)
  }

  


  return (
    <div>
      <div>Recipe Finder</div>
      <div>
        <input type="text" value={recipeInput} placeholder="Search your favorite recipes..." onChange={(e)=>setRecipeInput(e.target.value)}/>
        <button onClick={handleSearch}>Search Recipe</button>
      </div>
    </div>
  );
};
export default App;
