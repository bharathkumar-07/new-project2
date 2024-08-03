import React from 'react'

const SearchBar = ( {searchResult, setSearchResult} ) => {
  return (
    <div className='searchBar'>
    
      <input  value={searchResult} type='text' onChange={
        (e)=>{setSearchResult(e.target.value)}}> 
      </input>
      
      <label className='search'>Search</label>
      
      
     
    </div>
  )
}

export default SearchBar
