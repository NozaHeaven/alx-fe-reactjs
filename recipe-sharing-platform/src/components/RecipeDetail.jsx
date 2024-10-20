import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const RecipeDetail = () => {
  const { id } = useParams();  // Get the recipe id from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')  // Fetch the data from data.json
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;  // Show a loading state if the recipe data isn't available yet
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="rounded-lg w-full h-64 object-cover mb-6 shadow-md"  // Add shadow to image
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-4">{recipe.summary}</p>

        {/* Ingredients section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside">
            {/* Render ingredients (mock for now) */}
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </div>

        {/* Cooking instructions section */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside">
            {/* Render steps (mock for now) */}
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
