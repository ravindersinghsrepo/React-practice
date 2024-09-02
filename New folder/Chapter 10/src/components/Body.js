import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../util/mockData.js";
import { useEffect, useState } from "react";
  
import React from "react";
import Shimmer from "./Shimmer.js";

import { Link } from "react-router-dom";

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
    console.log(listOfRestaurant)
    if(listOfRestaurant.length===0){
      return <Shimmer/>
    }
    return(
      
       <div className="">
        <div className="flex">
          <div className="m-4 p-4">

            <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}
            />

            <button className="px-4 py-0.5 bg-green-100 m-4 rounded-md"
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
           className="my-10 p-2 bg-gray-200 rounded-md"
           onClick={()=>{
                const newList = listOfRestaurant.filter((res)=>{
                     return res.info.avgRating>=4;
               })
               setFilteredList(newList)     
           }}
           >Top Rated Restaurant List</button>

        </div>


        <div className="flex flex-wrap">
          {
            filteredlist.map((restaurant)=>(
              <Link to={`/restaurant/${restaurant.info.id}`}>
              <RestaurantCard key={restaurant.info.id}
              resData={restaurant}/>
              </Link>
            ))
          } 
        </div>

      </div>
    )
  }
export default Body