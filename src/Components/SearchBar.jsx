import React from 'react'

const SearchBar = ( {searchResult, setSearchResult} ) => {
  return (
    <div className='searchBar'>
    
      <input  value={searchResult} type='text' onChange={
        (e)=>{setSearchResult(e.target.value)}}> 
      </input>
      
      <button className='search'>Search</button>
      
      
     
    </div>
  )
}

export default SearchBar
