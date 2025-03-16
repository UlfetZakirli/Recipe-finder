export type RecipeType = {
    id: number;
    title: string;
    image: string;
};

export type Props = {
    searchParams: { query?: string; cuisine?: string; maxTime?: string };
};
