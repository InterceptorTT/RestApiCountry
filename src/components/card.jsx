import React from 'react'
import { clsx } from 'clsx';

function Card(props) {
    const {image, name, region, population, capital, full, onClickCard} = props;

      const fullWindow = clsx({
      "p-10": full,
      "w-3/4": full,
      "h-full": full,
      "bg-white": full,
      "flex": full,
      "flex-rows": full,
      "items-center": full,
      "z-50": full,
    });

  return (
    <div onClick={onClickCard} full={full} className={`${fullWindow}  rounded-md m-2 mx-5 text-black shadow-2xl cursor-pointer`}>
        <img src={image} alt="" />
        <div className='p-4'>
            <h3>{name}</h3>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
        </div>
    </div>
  )
}

export default Card