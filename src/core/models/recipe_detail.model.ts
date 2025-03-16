export type RecipeDetailsModel = {
    title: string;
    image: string;
    extendedIngredients: { id: number; original: string }[];
    readyInMinutes: number;
    servings: number;
    summary: string;
}