import { useState } from "react";
import { Search , Heart} from "lucide-react";

const RecipeExolorer = () => {
  const [inputRecipe, setInputRecipe] = useState("");

  const handleSearch = () => {
    console.log(inputRecipe);
  };

  return (
    <div className="bg-orange-100 w-full min-h-screen ">
      <div className="p-2 flex justify-center">
        <div className="flex justify-center">
          <input
            type="text"
            value={inputRecipe}
            placeholder="Search your favorite recipes..."
            onChange={(e) => setInputRecipe(e.currentTarget.value)}
            className="w-80 px-4 py-2 border-2 border-black-300 rounded-full placeholder-blue-500"
          />
          <button
            type="submit"
            className="p-2 rounded-full hover:bg-green-700 transition-colors cursor-pointer mx-2"
            onClick={handleSearch}
          >
            <Search
              size={32}
              strokeWidth={2}
              className="text-black-400 hover:text-white"
            />
          </button>
        </div>
        <button
          type="button"
          className="p-2 rounded-full hover:bg-red-700 transition-colors cursor-pointer"
        >
          <Heart
            size={32}
            strokeWidth={2}
            className="text-gray-900 hover:text-red-100"
          />
        </button>
      </div>
    </div>
  );
};
export default RecipeExolorer;
