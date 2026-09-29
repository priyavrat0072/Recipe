const RecipeCard = ({recipeDetails}) => {
    console.log(recipeDetails.strMeal)
    return(
        <div className="bg-white p-6 rounded-lg shadow-lg m-1">
            <img src={recipeDetails.strMealThumb} className="h-16 w-16" />
            <p>Card</p>
        </div>
    )
}
export default RecipeCard;
