function RecipeDetailsShimmer() {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4 animate-pulse bg-gray-200 h-8 w-1/2"></h1>
            <div className="w-full h-64 bg-gray-200 animate-pulse rounded-md"></div>
            <p className="mt-4 h-4 bg-gray-200 animate-pulse w-full"></p>
            <p className="mt-2 h-4 bg-gray-200 animate-pulse w-2/3"></p>
            <ul className="mt-4 space-y-2">
                {[...Array(5)].map((_, i) => (
                    <li key={i} className="h-4 bg-gray-200 animate-pulse w-3/4"></li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeDetailsShimmer