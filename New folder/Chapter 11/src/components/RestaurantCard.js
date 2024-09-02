import { useContext } from "react";
import { FOOD_LOGO_URL } from "../util/constants";
import { userContext } from "../util/userContext";
const styleCard={
    backgroundColor:'#f0f0f0'
  }
const RestaurantCard = (props) =>{
    const {resData}  = props;
    const {name , cloudinaryImageId , costForTwo , deliveryTime , avgRating ,cuisines  } = resData?.info;
    
    const data = useContext(userContext);
    return(
      <div className="res-card m-4 p-4 w-[200px] h-[300px] rounded-md bg-gray-100 hover:bg-gray-200" >
        <img 
        className="res-logo rounded-md h-[100px]"
        src={ FOOD_LOGO_URL + cloudinaryImageId} alt="food image"/> 
        <h4 className="font-bold p-4 text-sm">{name}</h4>
        <h5 className="text-sm">{cuisines.join(' ')}</h5>
        <h5 className="text-sm">{costForTwo}</h5>
        <h5>{avgRating}⭐</h5>
        <h5 className="text-sm">{deliveryTime} minutes</h5>
        <h5 className="text-sm">Deliver to - {data.userloggedIn}</h5>
      </div>
    )
  }
// input here is a component and output is also a component
export const withNearbyLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
      <label className='absolute bg-black text-white m-2 p-2 rounded-lg'>
        Nearby
      </label>
      <RestaurantCard {...props}/>
    </div>
    )
    
  }
}  
export default RestaurantCard ; 