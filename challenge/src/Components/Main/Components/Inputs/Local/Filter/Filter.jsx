import React from 'react'

function Filter() {
    return (
        <div className="bg-darkBlue px-6 py-3 rounded-sm">
            <select name="countries" className="bg-transparent outline-none text-white" defaultValue="none">
                <option value="none" disabled hidden>Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
            </select>
        </div>
    )
}

export default Filter
