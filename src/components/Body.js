import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import restaurantList from "../utils/constants";
const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);

  // let listOfRestaurant = [
  //   ,
  // ];
  return (
    <div>
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
           let filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            // console.log(listOfRestaurant)
            setListOfRestaurant(filteredList)
          }}
        >
          Top Rated Restruants
        </button>
      </div>
      <div className="restaurant-list">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
