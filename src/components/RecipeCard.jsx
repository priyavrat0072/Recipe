import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipeDetails }) => {
  
    const navigation = useNavigate()

    const handleNavigation =()=>{
        navigation("/recipeDetail", {state : recipeDetails})
    }

 return (
    <div className="bg-olive-800 rounded-2xl shadow-md m-1 hover:scale-[1.05] hover:shadow-xl transition-all duration-200 h-112 w-78 flex flex-col items-center pt-4 border-2 border-white">
      <img
        src={recipeDetails.strMealThumb}
        className="h-64 w-68 border-2 border-pink-200 rounded-2xl object-cover"
      />

      <div className="text-rose-200 mt-2 h-40 w-68 p-1">
        <p className="font-bold text-lg mb-1">{recipeDetails.strMeal}</p>
        <div className="flex justify-between px-0.5">
            <p className="font-medium text-sm text-lime-400">{recipeDetails.strCategory}</p>
            <p className="font-normal text-sm text-amber-400">{recipeDetails.strCountry}</p>
        </div>
      </div>
      <button
          type="button"
          className="text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-full text-sm px-4 py-2.5 focus:outline-none shadow-sm mt-auto mb-4"
            onClick={handleNavigation}
        >
          View Details
        </button>
    </div>
  );
};
export default RecipeCard;
