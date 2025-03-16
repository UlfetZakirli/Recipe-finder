import RecipeLoading from "@/ui/components/Recipes/Loading";
import RecipesContainer from "@/ui/container/RecipesContainer";
import { Suspense } from "react";

type Props = {
    searchParams: Promise<{ query?: string; cuisine?: string; maxTime?: string }>;
};

export default async function RecipesPage({ searchParams }: Props) {
    const filters = await searchParams;

    return (
        <Suspense fallback={<RecipeLoading />}>
            <RecipesContainer searchParams={filters} />
        </Suspense>
    );
}
