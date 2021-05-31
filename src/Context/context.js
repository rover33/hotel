import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const HotelContext = createContext();


export const HotelProvider  = props => {

   // states to be passed to different components
    const [query, setQuery] = useState("");
    const [starSort, setStarSort ] = useState("");
    const [score, setScore ] = useState("");
    const [items, setItems] = useState([]);
    const [language, setLanguage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    // &sort=${stargazers_count}&order=desc
  
    useEffect(async () => {
      setIsLoading(true)
      fetch(
        `https://api.github.com/search/repositories?q=hello-world`, {
        })
        .then(res => res.json())
        .then(items => {
          // console.log(items)
            //sorted Alphabetically
          // const sortData = items.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
          setItems(items)
          // setLanguage("")
          // setStarSort("")
          // setIsLoading(false)
        })
        .catch(() => {
          console.log("stop it");
        })
    }, []);

    // console.log(items.items)
    return (
        <HotelContext.Provider value={[
            query, setQuery, starSort, setStarSort, score, setScore, items, setItems, language, setLanguage
            ]}>
            {props.children}
        </HotelContext.Provider>
    )
}