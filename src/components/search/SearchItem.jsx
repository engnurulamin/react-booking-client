import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <>
      <div className="searchItem">
        <img
          className="siImg"
          src="https://source.unsplash.com/k9Zeq6EH_bk"
          alt=""
        />
        <div className="desc">
          <h1 className="title">{item.name}</h1>
          <span className="distance">{item.distance}m from center</span>
          <span className="taxiOp">Free airport taxi</span>
          <span className="subtitle">
            Studio aprtment with air conditioning
          </span>
          <span className="features">{item.desc}</span>
          <span className="cancelOp">Free cancellation</span>
          <span className="cancelOpsub">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="details">
          {item.rating && (
            <div className="rating">
              <span>Excellent</span>
              <button>{item.rating}</button>
            </div>
          )}
          <div className="detailText">
            <span className="price">{item.cheapestPrice}TK</span>
            <span className="textOp">Includes taxes And fees</span>
            <Link to={`http://localhost:8800/api/hotels/${item._id}`}>
              <button className="checkBtn">See Avialability</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchItem;
