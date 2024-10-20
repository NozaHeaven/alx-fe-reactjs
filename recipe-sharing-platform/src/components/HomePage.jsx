import { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetching mock recipe data from a JSON file
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe List</h1>

      {/* Responsive grid layout for recipe cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
          >
            {/* Recipe image with responsive sizing */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-lg w-full h-48 object-cover"
            />

            {/* Recipe title */}
            <h2 className="text-xl font-bold mt-4">{recipe.title}</h2>

            {/* Recipe summary */}
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
