import React, { useState, useContext } from "react";
import { HotelContext } from "./Context/context";
// import "../styles/searchbox.css";


const Search = () => {
    const [searchString, setSearchString] = useState("");
    const [repos, setRepos, language, setLanguage, queryLookUpArr, setQueryLookUpArr, query, setQuery, starSort, setStarSort] = useContext(HotelContext);
    
    const handleSubmit = (e) => {
        console.log(repos.data)
        e.preventDefault();
        if (queryLookUpArr === "") return queryLookUpArr
        let filterArr = queryLookUpArr.filter(function(item){
            if (repos.data.item.name.toLowerCase().includes(searchString)) {
                return true
            } 
            return false
        }) 
        setRepos(filterArr);
        setQuery("")
    }

    return (
        <div className="panel-search">
            <div className="search">Search</div>
            <form onSubmit={handleSubmit}>
                <input 
                className="search-input"
                type="text" 
                name="Repo" 
                placeholder="Repo"
                value={queryLookUpArr.name} 
                onChange={e => setSearchString(e.target.value)}
                />
                <button className="search-submit">Submit</button>
            </form>
        </div>
    )
}

export default Search;