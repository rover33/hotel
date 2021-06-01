import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const HotelContext = createContext();


export const HotelProvider  = props => {

   // states to be passed to different components
    const [queryLookUpArr, setQueryLookUpArr] = useState([]);
    const [repos, setRepos] = useState([]);
    const [ query, setQuery ] = useState("");
    const [ sortRepos, setSortRepos ] = useState("");
    const [ filterLanguage, setFilterLanguage ] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // console.log(repos)
    return (
        <HotelContext.Provider value={[repos, setRepos, filterLanguage, setFilterLanguage, queryLookUpArr, setQueryLookUpArr, query, setQuery, sortRepos, setSortRepos]}>
            {props.children}
        </HotelContext.Provider>
    )
}