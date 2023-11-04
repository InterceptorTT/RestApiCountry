import React from 'react'

function Select(props) {
  return (
    <div>
         <form  onChange={props.onFormSubmit}>
            <select name="" id="" value={props.region} onChange={props.onRegionSubmit}
            className="bg-slate-100 text-black w-36">
            <option className="text-slate-500" value="all">Filter By region</option>
              <option value="europe">europe</option>
              <option value="asia">asia</option>
              <option value="america">america</option>
              <option value="oceania">oceania</option>
              <option value="africa">africa</option>
            </select>
          </form>
    </div>
  )
}

export default Select