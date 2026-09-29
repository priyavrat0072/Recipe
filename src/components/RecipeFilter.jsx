import RecipeCard from "./RecipeCard"

const RecipeFilter =({searchedRecipe})=>{
    return(
        <div>
            {
                searchedRecipe.map((item)=>(
                    <RecipeCard key={item.idMeal} recipeDetails = {item}/>
                ))
            }
        </div>
    )
}
export default RecipeFilter
