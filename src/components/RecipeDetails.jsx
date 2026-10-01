import { useLocation, useNavigate } from "react-router-dom";
const RecipeDetails = () => {
  const navigate = useNavigate();

  /* Getting the recipe details object from card using location.state */
  const location = useLocation();
  const recipe = location.state;
  console.log(recipe)

  /* creating array for ingredients and measurements from the recipe details recipe object */
  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  const ingredients = getIngredients(recipe);
  return (
    <div className="bg-mauve-900 w-full min-h-screen ">
      <div className="flex justify-center px-4 pb-10">

        <div className="w-full max-w-3xl p-4 bg-neutral-700 rounded-2xl shadow-lg mt-6 sm:mt-10">
            <div className="flex justify-between px-2 sm:px-10 mb-3">
                <button onClick={()=>navigate(-1)} className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-full text-sm px-5 py-2 focus:outline-none shadow-sm mt-auto mb-1.5">Go-back</button>
                {
                  recipe.strYoutube ? (
                    <button onClick={()=>window.open(recipe.strYoutube ,"_blank")} className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-sm px-5 py-2 focus:outline-none shadow-sm mt-auto mb-1.5">Watch Video</button>
                  ) : null
                }
            </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-6">
            <div className="w-full md:w-80">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="h-60 sm:h-72 w-full border-2 border-amber-100 rounded-2xl object-cover"
              />
              <div className="text-white mt-2 w-full p-1">
                <p className="font-bold text-lg mb-1">{recipe.strMeal}</p>
                <div className="flex justify-between px-0.5">
                  <p className="font-medium text-sm text-lime-400">
                    {recipe.strCategory}
                  </p>
                  <p className="font-normal text-sm text-amber-400">
                    {recipe.strCountry}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-olive-800 w-full md:w-80 pl-3 pt-1 pb-2 border-2 rounded-2xl max-h-72 overflow-y-auto border-amber-100">
              <p className="text-lg underline font-semibold text-yellow-400">
                Ingredients & Measurements
              </p>
              {ingredients.map((item , index) => (
                <div className="flex gap-5" key={index}>
                  <p className="text-sm font-light text-white">
                    {item.ingredient}-{item.measure}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-h-64 rounded-2xl bg-stone-900 mt-4 overflow-y-auto p-2 border-amber-100 border-2">
              <p className="mb-1 text-lg underline font-semibold text-yellow-400">Instruction for your dish....</p>
              <p className="font-light text-sm text-white">{recipe.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetails;
