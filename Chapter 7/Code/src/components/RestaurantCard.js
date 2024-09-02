import { FOOD_LOGO_URL } from "../util/constants";
const styleCard={
    backgroundColor:'#f0f0f0'
  }
const RestaurantCard = (props) =>{
    const {resData}  = props;
    const {name , cloudinaryImageId , costForTwo , deliveryTime , avgRating ,cuisines  } = resData?.info;
    return(
      <div className="res-card" style={styleCard}>
        <img 
        className="res-logo"
        src={ FOOD_LOGO_URL + cloudinaryImageId} alt="food image"/> 
        <h4>{name}</h4>
        <h5>{cuisines.join(' ')}</h5>
        <h5>{costForTwo/100} for two</h5>
        <h5>{avgRating}⭐</h5>
        <h5>{deliveryTime} minutes</h5>
      </div>
    )
  }
export default RestaurantCard ; 