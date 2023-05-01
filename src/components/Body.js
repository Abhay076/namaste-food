import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import restaurantList from "../utils/constants";
function filterData(searchText, listOfRestaurant) {
  const filterData = listOfRestaurant.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  // let listOfRestaurant = [
  //   ,
  // ];
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, listOfRestaurant);
            setListOfRestaurant(data)
          }}
        >search</button>
      </div>
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            let filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            // console.log(listOfRestaurant)
            setListOfRestaurant(filteredList);
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
