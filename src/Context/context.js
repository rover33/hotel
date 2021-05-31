import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const HotelContext = createContext();


export const HotelProvider  = props => {

   // states to be passed to different components
    const [queryLookUpArr, setQueryLookUpArr] = useState([]);
    const [ query, setQuery ] = useState("");
    const [starSort, setStarSort ] = useState("");
    const [repos, setRepos] = useState([]);
    const [language, setLanguage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    // &sort=${stargazers_count}&order=desc
  
    useEffect(() => {
      (async () => {
        const repos = await axios.get(
          `https://api.github.com/search/repositories?q=${query}`
        );
        setRepos(repos.data.items);
        setQueryLookUpArr(repos.data.items)
        setQuery("")
      })();
    }, []);


    // useEffect(() => {
    //   setIsLoading(true)
    //   fetch(
    //     `https://api.github.com/search/repositories?q=hello-world`, {
    //     })
    //     .then(res => res.json())
    //     .then(repos => {
    //       // console.log(items)
    //         //sorted Alphabetically
    //       // const sortData = items.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
    //       setRepos(repos)
    //       // setLanguage("")
    //       // setStarSort("")
    //       // setIsLoading(false)
    //     })
    //     .catch(() => {
    //       console.log("stop it");
    //     })
    // }, []);

    console.log(repos)
    return (
        <HotelContext.Provider value={[repos, setRepos, language, setLanguage, queryLookUpArr, setQueryLookUpArr, query, setQuery, starSort, setStarSort]}>
            {props.children}
        </HotelContext.Provider>
    )
}