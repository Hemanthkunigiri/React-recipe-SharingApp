import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import TrendingSlider from './TredingSlider'

const Category = () => {
    const { name } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
            const data = await api.json()
            setData(data.meals)
        }

        fetchData()
    }, [name])

    return (
        <>
            <Navbar />
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8 ">
                {
                    data.map((d) => {
                        return (
                            <Link to={`/${d.idMeal}`} key={d.idMeal} className="group">
                                <div className="">
                                    <div className="img mb-4">
                                        <img 
                                            src={d.strMealThumb} 
                                            alt={d.strMeal}
                                            className="w-48 h-40 object-cover rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
                                            style={{ objectPosition: 'center center' }} // Centered image
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{d.strMeal}</h3>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

            <TrendingSlider />
        </>
    )
}

export default Category
