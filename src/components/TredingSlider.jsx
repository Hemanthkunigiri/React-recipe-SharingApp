import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
// Import css files for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const TrendingSlider = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      const data = await api.json();
      setData(data.meals)
    }

    fetchData();
  }, [])

  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    cssEase: "linear"
  };

  return (
    <>
      <div style={{
        height: '26vh',
        width: '99%',
        margin: 'auto',
        overflowX: 'hidden'
      }}>
        <Slider {...settings} style={{ marginTop: '1rem' }}>
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`} key={d.idMeal}>
                <div className='slider2'>
                  <img
                    src={d.strMealThumb}
                    alt={d.strMeal}
                    className="transition-all duration-300 hover:brightness-110 hover:scale-110 hover:border-2 hover:border-black hover:rounded-lg"
                    style={{ width: '10rem', height: '7rem' }}
                  />
                </div>
              </Link>
            )
          })}
        </Slider>
      </div>
    </>
  );
}

export default TrendingSlider;
