import React from 'react'
import SearchBar from "./Local/SearchBar/SearchBar"
import Filter from "./Local/Filter/Filter"

function Inputs() {
    return (
        <div className="flex items-center justify-between">
            <SearchBar/>
            <Filter />
        </div>
    )
}

export default Inputs
