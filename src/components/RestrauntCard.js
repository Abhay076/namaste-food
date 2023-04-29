import { CardImg_URL } from "../utils/mockData";
const RestrauntCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    lastMileTravelString,
    costForTwoString,
    avgRating,
  } = props;
  return (
    <div className="card">
      <img src={CardImg_URL + cloudinaryImageId} alt="card-img" />
      <div className="ratings">
        <p>{name}</p>
        <p style={avgRating > 3 ? { color: "green" } : { color: "red" }}>
          {avgRating}
        </p>
      </div>
      <p>{costForTwoString}</p>
      <p>{cuisines.join(",")}</p>
      <p>{lastMileTravelString} minutes</p>
    </div>
  );
};

export default RestrauntCard;
