export const recipesService = async (
    query: string = "",
    cuisine: string = "",
    maxTime: string = "10"
) => {
    const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxTime}&apiKey=${API_KEY}`;

    try {
        const res = await fetch(API_URL, { next: { revalidate: 60 } });

        if (!res.ok) {
            console.error("Fetch error:", res.status, res.statusText);
            return null;
        }

        const data = await res.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return null;
    }
};
