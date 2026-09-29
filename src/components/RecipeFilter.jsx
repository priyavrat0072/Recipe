import RecipeCard from "./RecipeCard"

const RecipeFilter =({searchedRecipe})=>{
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-20">
            {
                searchedRecipe.map((item)=>(
                    <RecipeCard key={item.idMeal} recipeDetails = {item}/>
                ))
            }
        </div>
    )
}
export default RecipeFilter
