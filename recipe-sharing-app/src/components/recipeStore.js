import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to set the search term
  setSearchTerm: (term) => {
    set(state => {
      const lowercasedTerm = term.toLowerCase();
      const filtered = state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(lowercasedTerm)
      );
      return { searchTerm: term, filteredRecipes: filtered };
    });
  },

  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Action to delete a recipe
  deleteRecipe: (recipeId) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    };
  }),
}));

export default useRecipeStore;

