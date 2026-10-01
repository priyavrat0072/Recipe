import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipeDetails }) => {
  
    const navigation = useNavigate()

    /* sharing the recipe data to recipeDetails components */
    const handleNavigation =()=>{
        navigation("/recipeDetail", {state : recipeDetails})
    }

 return (
    <div onClick={handleNavigation} className="bg-olive-800 rounded-2xl shadow-md m-1 hover:scale-[1.05] hover:shadow-xl transition-all duration-200 min-h-96 w-full max-w-78 flex flex-col items-center pt-4 border-2 border-white">
      <img
        src={recipeDetails.strMealThumb}
        alt={recipeDetails.strMeal}
        className="h-56 sm:h-64 w-[90%] border-2 border-pink-200 rounded-2xl object-cover"
      />

      <div className="text-rose-200 mt-2 min-h-24 w-[90%] p-1">
        <p className="font-bold text-lg mb-1">{recipeDetails.strMeal}</p>
        <div className="flex justify-between px-0.5">
            <p className="font-medium text-sm text-lime-400">{recipeDetails.strCategory}</p>
            <p className="font-normal text-sm text-amber-400">{recipeDetails.strCountry}</p>
        </div>
      </div>
      
    </div>
  );
};
export default RecipeCard;
