import Image from "next/image";
import Link from "next/link";
import { recipeDetailsService } from "@/core/services/recipe_detail.service";

async function RecipeDetails({ id }: { id: string }) {
    const recipe = await recipeDetailsService(id);

    if (!recipe) {
        return (
            <p className="text-red-500 text-center mt-10">
                Failed to load recipe details. Please try again.
            </p>
        );
    }
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <Link href="/recipes">
                <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Back to Recipes
                </button>
            </Link>
            <h1 className="text-2xl font-bold mb-4 text-center md:text-3xl">
                {recipe.title}
            </h1>

            <div className="w-full h-auto mb-4">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-md"
                />
            </div>

            <p className="text-gray-700 my-4">
                {recipe.summary.replace(/<[^>]+>/g, "")}
            </p>

            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <p className="font-semibold text-lg">
                    Ready in: {recipe.readyInMinutes} mins
                </p>
                <p className="font-semibold text-lg">Servings: {recipe.servings}</p>
            </div>

            <h2 className="text-lg font-semibold mt-4">Ingredients:</h2>
            <ul className="list-disc pl-6">
                {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id} className="text-gray-700">
                        {ingredient.original}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeDetails;
