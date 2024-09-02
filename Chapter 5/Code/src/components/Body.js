import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../util/mockData.js";
import { useState } from "react";
  
import React from "react";
const Body = () =>{
    const [listOfRestaurant , setRestaurant] = useState(restaurantList);
    console.log(listOfRestaurant)
    return(
       <div className="body">
        <div className="filter">
           <button
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
            listOfRestaurant.map((restaurant)=>(
              <RestaurantCard key={restaurant.data.id}
               resData={restaurant}/>
            ))
          } 
        </div>
       </div>
    )
  }
export default Body