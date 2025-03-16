"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function Home() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [query, setQuery] = useState(searchParams.get("query") || "");
    const [cuisine, setCuisine] = useState(searchParams.get("cuisine") || "");
    const [maxTime, setMaxTime] = useState(searchParams.get("maxTime") || "");

    const isDisabled = !query && !cuisine && !maxTime;

    const updateSearchParams = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-xl font-bold mb-4 text-center">Recipe Finder</h1>

                <input
                    type="text"
                    placeholder="Search recipes..."
                    className="w-full p-2 border rounded mb-3"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        updateSearchParams("query", e.target.value);
                    }}
                />

                <select
                    className="w-full p-2 border rounded mb-3"
                    value={cuisine}
                    onChange={(e) => {
                        setCuisine(e.target.value);
                        updateSearchParams("cuisine", e.target.value);
                    }}
                >
                    <option value="">Select Cuisine</option>
                    <option value="italian">Italian</option>
                    <option value="mexican">Mexican</option>
                    <option value="chinese">Chinese</option>
                </select>

                <input
                    type="number"
                    placeholder="Max prep time (minutes)"
                    className="w-full p-2 border rounded mb-4"
                    value={maxTime}
                    min={0}
                    onChange={(e) => {
                        const rawValue = e.target.value;
                        if (rawValue === "") {
                            setMaxTime("");
                            updateSearchParams("maxTime", "");
                            return;
                        }

                        const value = Math.max(0, Number(rawValue));
                        setMaxTime(value.toString());
                        updateSearchParams("maxTime", value.toString());
                    }}
                />

                <button
                    className={`w-full p-2 text-white rounded ${isDisabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    disabled={isDisabled}
                    onClick={() => router.push(`/recipes?${searchParams.toString()}`)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Home;
