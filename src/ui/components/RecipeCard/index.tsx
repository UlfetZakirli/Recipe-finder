import Image from "next/image";
import Link from "next/link";
import type { RecipeCardType } from "./recipe_card.type";

const RecipeCard = ({ recipe }: RecipeCardType) => (
    <Link
        href={`/recipes/${recipe.id}`}
        className="group bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200"
    >
        <Image
            src={recipe.image}
            alt={recipe.title}
            width={500}
            height={300}
            className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-teal-500">
            {recipe.title}
        </h2>
    </Link>
);

export default RecipeCard;
