import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const PopularSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
      const data = await api.json();

      setData(data.meals);
    };

    fetchData();
  }, []);

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-500"
      onClick={onClick}
    >
      ❮
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-500"
      onClick={onClick}
    >
      ❯
    </button>
  );

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="h-[60vh] w-[90%] mx-auto mt-6 relative">
      <Slider {...settings} className="mt-4">
        {data.map((d) => (
          <Link to={`/${d.idMeal}`} key={d.idMeal}>
            <div className="slider flex justify-center">
              <div className="relative group">
                <img
                  src={d.strMealThumb}
                  alt={d.strMeal}
                  className="w-80 h-64 rounded-lg object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <p className="text-white font-semibold text-lg">{d.strMeal}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default PopularSlider;
