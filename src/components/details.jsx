import React from 'react'

function Details(props) {
    const {image, name, region, population, capital} = props;
    return (
      <div className={`p-3 w-full h-full rounded-md m-2 mx-5 text-black shadow-2xl`}>
          <div className='flex gap-5 items-center justify-evenly'>
            <img src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <p>Population: {population}</p>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
            </div>
          </div>
      </div>
    )
}

export default Details