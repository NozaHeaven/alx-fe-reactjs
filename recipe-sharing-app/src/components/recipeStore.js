import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],

  // Add a recipe to the favorites list
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),

  // Remove a recipe from the favorites list
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  recommendations: [],

  // Generate recommendations based on favorited recipes
  generateRecommendations: () => set(state => {
    // Mock recommendation system (for demo purposes)
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

