import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../util/mockData.js";
import { useEffect, useState } from "react";
  
import React from "react";
import Shimmer from "./Shimmer.js";


const Body = () =>{
    const [listOfRestaurant , setRestaurant] = useState([]);
    const[filteredlist , setFilteredList] = useState([]);
    const[searchText , setSearchText] = useState("")
    useEffect(()=>{
      fetchData();
    },[])

    async function fetchData(){
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const jsonData = await data.json() ; 
      console.log(jsonData);
      const listofRes = jsonData?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants;
      setRestaurant(listofRes);
      setFilteredList(listofRes);
    }

    console.log(searchText);

    if(listOfRestaurant.length===0){
      return <Shimmer/>
    }
    return(
      
       <div className="body">
        <div className="filter">
          <div className="search">
            <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}
            />
            <button 
            onClick={()=>{
                const updatedList = listOfRestaurant.filter((res)=>{
                    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                })
                setFilteredList(updatedList);
            }}
            >
              Search
            </button>
          </div>
           <button
           className="filter-btn"
           onClick={()=>{
                const filteredList = listOfRestaurant.filter((res)=>{
                     return res.data.avgRating>4;
               })
               setRestaurant(filteredList)     
           }}
           >Top Rated Restaurant List</button>
        </div>
        <div className="res-container">
          {
            filteredlist.map((restaurant)=>(
              <RestaurantCard key={restaurant.info.id}
               resData={restaurant}/>
            ))
          } 
        </div>
       </div>
    )
  }
export default Body