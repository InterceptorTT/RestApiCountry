import React from 'react'

function Input(props) {
  return (
    <div>
        <input onChange={props.onSearchCountry} type="text" maxLength={80} name="input" id="input" placeholder='Search a country..'
        className='p-2 bg-slate-100 shadow-lg rounded-s-md text-black w-auto' 
        />
    </div>
  )
}

export default Input