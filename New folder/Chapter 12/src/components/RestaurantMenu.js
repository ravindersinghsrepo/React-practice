import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../util/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>{
    const {id} = useParams();
    const resInfo = useRestaurantMenu(id);
    const [showIndex, setShowIndex] = useState(null);    
    
    if(resInfo==null){
        return <Shimmer/>
    }

    const {name , cuisines , costForTwoMessage} = resInfo.data.cards[2].card?.card?.info;
    const {itemCards}= resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

    // category cards 
    const categoryWithList = resInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(item=>{
        return item.card.card['@type']==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    })
    
    return(
        <div className="text-center">
            <h1  className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(', ')}-{costForTwoMessage}</h2>
            <h2>{costForTwoMessage}</h2>
            { 
                categoryWithList.map((category,index)=>{

                    return (<RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItem={(index==showIndex)?true:false}
                    setShowIndex={
                        ()=>{
                            index==showIndex ?setShowIndex(null) : setShowIndex(index)
                        }
                    }
                    />)
                })
            }
            
        </div>
    )
}
export default RestaurantMenu;
