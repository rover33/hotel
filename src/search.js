import React, { useState, useContext, useEffect } from 'react'
import { HotelContext } from './Context/context'
// import "../styles/searchbox.css";
import axios from 'axios'

const Search = () => {
  const [searchString, setSearchString] = useState('')
  const [
    repos,
    setRepos,
    filterLanguage,
    setFilterLanguage,
    query,
    setQuery,
    sortRepos, 
    setSortRepos
  ] = useContext(HotelContext)

  const searchRepos = async () => {
    console.log(`https://api.github.com/search/repositories?q=${searchString}&sort=${sortRepos}`)
    const { data } = await axios.get(
      `https://api.github.com/search/repositories?q=${searchString}+language=${filterLanguage}&sort=${sortRepos}&order=desc`
    )
    setRepos([...data.items])
  }


  const updateSorts =  ( sortType ) => {
     setSortRepos(sortType)
     searchRepos()
    
  }

  // const updateFilter = (sortLang) => {
  //   searchRepos()
  //   setFilterLanguage(sortLang)
  //   return (
  //     console.log(repos.language)
  //     // repos.map((repo) => {
  //     //   <option key={repo}>
  //     //     {repo.langauge}
  //     //   </option>
  //     // })
  //   )
  // }



  useEffect( () => {
    searchRepos(sortRepos)
    }, [ sortRepos]
  );


  return (
    <div className='panel-search'>
      <div className='search'>Search</div>
      <div>
        <input
          className='search-input'
          type='text'
          name='Repo'
          placeholder='Repo'
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
        />
        <button className='search-submit' onClick={searchRepos}>
          Submit
        </button>
      </div>
                <div>
                <label>Stars:</label>
                      <button
                        className="starbox"
                        type="checkbox"
                        id="stars"
                        name="stars"
                        onClick={() => updateSorts("stars")}
                      >Sort</button>
                </div>
    {/* <div>
      <label>filter:</label>
           <select>
             {updateFilter("language")}
           </select>
      </div> */}
    </div>
  )
}

export default Search
