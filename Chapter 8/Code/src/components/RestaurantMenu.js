import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{
    const {id} = useParams();
    const[resInfo , setResInfo] = useState(null);
    useEffect(()=>{
        fetchRestaurantData();
    },[])
    async function fetchRestaurantData(){
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId='+id);
        const jsonData = await data.json();
        console.log(jsonData)
        setResInfo(jsonData);        
    }
    if(resInfo==null){
        return <Shimmer/>
    }
    const {name , cuisines , costForTwoMessage} = resInfo.data.cards[2].card?.card?.info;
    const {itemCards}= resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>Menu</h2>
            <ul>
               {itemCards.map((item)=>{
                return(
                    <li key={item.card.info.name}>
                    {item.card.info.name} -{"Rs."}
                    {item.card.info.price /100 || item.card.info.defaultPrice/100}
                    </li>
                )
               })}
            </ul>
        </div>
    )
}
export default RestaurantMenu;