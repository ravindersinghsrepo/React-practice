import { FOOD_LOGO_URL } from "../util/constants";
const styleCard={
    backgroundColor:'#f0f0f0'
  }
const RestaurantCard = (props) =>{
    const {resData}  = props;
    const {name , cloudinaryImageId , costForTwo , deliveryTime , avgRating ,cuisines  } = resData?.info;
    
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
      </div>
    )
  }
export default RestaurantCard ; 