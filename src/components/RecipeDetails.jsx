import { useLocation, useNavigate } from "react-router-dom";
const RecipeDetails = () => {
  console.log("Recipe details");
  const navigate = useNavigate();

  const location = useLocation();
  const recipe = location.state;

//   const ing = [
//     { ingredient: "Chicken Breast", measure: "500g" },
//     { ingredient: "Yogurt", measure: "150g" },
//     { ingredient: "Lemon Juice", measure: "2 tbsp" },
//     { ingredient: "Garlic", measure: "4 cloves" },
//     { ingredient: "Ginger", measure: "1 tbsp" },
//     { ingredient: "Garam Masala", measure: "2 tsp" },
//     { ingredient: "Turmeric", measure: "1 tsp" },
//     { ingredient: "Cumin", measure: "1 tsp" },
//     { ingredient: "Paprika", measure: "2 tsp" },
//     { ingredient: "Salt", measure: "1 tsp" },
//     { ingredient: "Vegetable Oil", measure: "2 tbsp" },
//     { ingredient: "Butter", measure: "2 tbsp" },
//     { ingredient: "Onion", measure: "1 large" },
//     { ingredient: "Tomato", measure: "400g" },
//     { ingredient: "Tomato Puree", measure: "2 tbsp" },
//     { ingredient: "Coconut Milk", measure: "200ml" },
//     { ingredient: "Heavy Cream", measure: "100ml" },
//     { ingredient: "Cilantro", measure: "2 tbsp" },
//     { ingredient: "Chili Powder", measure: "1 tsp" },
//     { ingredient: "Kasuri Methi", measure: "1 tsp" },
//   ];

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
//   console.log("ingredients----", JSON.stringify(ingredients, null, 2));

  // <button onClick={()=>navigate(-1)}>go back</button>
  return (
    <div className="bg-mauve-900 w-full min-h-screen ">
      <div className="flex  justify-center min-h-screen ">

        <div className="w-175 h-165 p-4 bg-neutral-700 rounded-2xl shadow-lg mt-10 ">
            <div className="flex justify-between px-10 mb-3">
                <button onClick={()=>navigate(-1)} className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-full text-sm px-5 py-2 focus:outline-none shadow-sm mt-auto mb-1.5">Go-back</button>
                <button onClick={()=>window.open(recipe.strYoutube ,"_blank")} className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-full text-sm px-5 py-2 focus:outline-none shadow-sm mt-auto mb-1.5">Watch Video</button>
            </div>
          <div className="h-88 flex gap-10 mb-10">
            <div>
              <img
                src={recipe.strMealThumb}
                className="h-72 w-80 border-2 border-amber-100 rounded-2xl object-cover"
              />
              <div className="text-white mt-2 h-40 w-80 p-1">
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

            <div className="bg-olive-800 w-80 pl-3 pt-1 border-2 rounded-2xl h-72  overflow-y-auto border-amber-100  ">
              <p className="text-lg underline font-semibold text-yellow-400">
                Ingredients & Measurements
              </p>
              {ingredients.map((item) => (
                <div className="flex gap-5" >
                  <p className="text-sm font-light text-white">
                    {item.ingredient}-{item.measure}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-42 rounded-2xl bg-stone-900 mt-4 overflow-y-auto p-2 border-amber-100 border-2">
              <p className="mb-1 text-lg underline font-semibold text-yellow-400 ">Instruction for your dish....</p>
              <p className="font-light text-sm text-white">{recipe.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeDetails;
