// import React, { useState, useContext } from "react";
// import { HotelContext } from "./Context/context";
// import "../styles/filters.css"


// const Filters = () => {
//     const [query, setQuery, starSort, setStarSort, score, setScore, items, setItems, language, setLanguage ] = useContext(HotelContext);

//     const handleStateChange = (e) => {
//         e.preventDefault()
//         let filterArr = items.filter((item) =>{
//             if (item.language.includes(language)) {
//                 return true
//             }
//             return false
//         })
//         setItems(filterArr)
//     }


//     const renderState = () => {

//         let stateArr = tablesDisplayArr.map((item) => {
//             return item.state
//         })

//         let filterState = Array.from(new Set(stateArr)).sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))

//        return(
//            filterState.map(el => (
//             <option key={el}>
//                 {el}
//             </option>
//          ))
//        )
//     }

//     const renderGenre = () => {
//         let genreArr = tablesDisplayArr.flatMap((item) => {
//             return item.genre.split(",")
//         })



//         let filterGenre = Array.from(new Set(genreArr)).sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1))

//        return(
//            filterGenre.map(el => (
//             <option key={el}>
//                 {el}
//             </option>
//          ))
//        )
//     }

//     return (
//         <div className="panel-filters">
//             <div className="filters">Filters</div>
//             <form className="filter-form" onSubmit={handleStateChange}>
//                 <select className="filter-state" onChange={e => setSearchState(e.target.value)}>
//                     {renderState()}
//                 </select>
//                 <select className="filter-genre"onChange={e => setSearchGenre(e.target.value)}>
//                     {renderGenre()}
//                 </select>
//                 <button className="filter-button">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Filters;