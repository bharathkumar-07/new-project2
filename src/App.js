import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import Menu from './Components/Navbar/Menu';
import Categories from './Components/Navbar/Catergories';
import items from './Components/Navbar/data';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [searchResult , setSearchResult] = useState("");

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  useEffect(()=>{
   console.log(searchResult); 
   const NewArr = items.filter((men)=>(men.title.toLowerCase()).includes(searchResult.toLowerCase()));
   setMenuItems(NewArr);
  },[searchResult])


  return (
    

    <main>
    <Router>
      <Routes>
        
      <section className="menu section">
       <Categories 
          categories={categories} 
          filterItems={filterItems}  
          searchResult={searchResult} 
          setSearchResult={setSearchResult}
        />
        < Menu items={menuItems}  />
      </section>
      </Routes>
      </Router>
       
    </main>
    
  );
}

export default App;
