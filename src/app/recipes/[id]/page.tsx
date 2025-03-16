import React, { Suspense } from "react";
import RecipeDetailsShimmer from "@/ui/components/RecipeDetails/Shimmer";
import RecipeDetails from "@/ui/container/RecipeDetailContainer";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function RecipeDetailsPage({ params }: Props) {
    const { id } = await params;

    return (
        <Suspense fallback={<RecipeDetailsShimmer />}>
            <RecipeDetails id={id} />
        </Suspense>
    );
}
