import type { RecipeDetailsModel } from "../models/recipe_detail.model";

export const recipeDetailsService = async (recipeId: string) => {
    const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
    const API_URL = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`;

    try {
        const res = await fetch(API_URL, { next: { revalidate: 60 } });
        if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);

        const data: RecipeDetailsModel = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        return null;
    }
}

