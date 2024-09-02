import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const useRestaurantMenu = (id) =>{
    const [resInfo , setResInfo] = useState(null);
    useEffect(()=>{
        fetchData(); 
    },[])
    const fetchData=async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId='+id)
        const jsonData = await data.json();
        setResInfo(jsonData);
    }

    return resInfo;
}
export default useRestaurantMenu;