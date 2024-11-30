import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import TrendingSlider from './TredingSlider';
import { useParams } from 'react-router-dom';

const RecipeId = () => {
    const { idMeal } = useParams();

    const [data, setData] = useState([]);
    const [active, setActive] = useState('ingredient');

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await api.json();
            setData(data.meals[0]);
        };
        fetchData();
    }, [idMeal]);

    return (
        <>
            <Navbar />
            <div className="w-[90%] mx-auto text-center mt-6">
                <h1 className="text-3xl font-bold mb-4">{data.strMeal}</h1>
                <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3">
                        <img
                            src={data.strMealThumb}
                            alt={data.strMeal}
                            className="w-72 h-72 mx-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/3">
                        <div className="flex justify-center gap-4 mb-4">
                            <button
                                onClick={() => setActive('ingredient')}
                                className={`px-4 py-2 rounded-md font-semibold ${
                                    active === 'ingredient'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                }`}
                            >
                                Ingredient
                            </button>
                            <button
                                onClick={() => setActive('instruction')}
                                className={`px-4 py-2 rounded-md font-semibold ${
                                    active === 'instruction'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                }`}
                            >
                                Instruction
                            </button>
                        </div>

                        {/* Active Section */}
                        {active === 'ingredient' ? (
                            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <div className="text-lg font-medium">{data.strIngredient1} - {data.strMeasure1}</div>
                                <div className="text-lg font-medium">{data.strIngredient2} - {data.strMeasure2}</div>
                                <div className="text-lg font-medium">{data.strIngredient3} - {data.strMeasure3}</div>
                                <div className="text-lg font-medium">{data.strIngredient4} - {data.strMeasure4}</div>
                                <div className="text-lg font-medium">{data.strIngredient5} - {data.strMeasure5}</div>
                                <div className="text-lg font-medium">{data.strIngredient6} - {data.strMeasure6}</div>
                            </div>
                        ) : (
                            <p className="bg-gray-100 p-4 rounded-lg shadow-md text-justify">
                                {data.strInstructions}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Trending Slider */}
            <div className="pt-10">
                <TrendingSlider />
            </div>
        </>
    );
};

export default RecipeId;
