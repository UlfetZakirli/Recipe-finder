import { recipesService } from "@/core/services/recipes.service";
import type { Props, RecipeType } from "./recipe.type";
import RecipeCard from "@/ui/components/RecipeCard";
import Link from "next/link";

async function RecipesContainer({
    searchParams,
}: Props) {

    const recipes = await recipesService(
        searchParams.query,
        searchParams.cuisine,
        searchParams.maxTime
    );

    if (!recipes)
        return (
            <p className="text-red-500 text-center mt-10">
                Failed to load recipes. Please try again.
            </p>
        );

    if (!recipes.length) {
        return (
            <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
                <h1 className="text-3xl font-bold mb-8 text-center">Recipes</h1>
                <p className="text-gray-500">
                    No recipes found. Try a different search.
                </p>
                <Link
                    href="/"
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold mb-2 text-center">Recipes</h1>
            <Link
                href="/"
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-10"
            >
                Back to Home
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recipes.map((recipe: RecipeType) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

        </div>
    );
}


export default RecipesContainer