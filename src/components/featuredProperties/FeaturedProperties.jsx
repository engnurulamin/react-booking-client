import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const apiUrl =
    "http://localhost:8800/api/hotels?featured=true&min=1000&max=5000&limit=3";
  const { data, loading, error, reFetch } = useFetch(apiUrl);
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((hotel) => (
            <div className="fpItem" key={hotel._id}>
              {/* <img src={hotelphotos[0]} alt="" /> */}
              <img
                src="https://source.unsplash.com/rlwE8f8anOc"
                alt=""
                className="fpImg"
              />
              <span className="fpName"> {hotel.name}</span>
              <span className="fpCity"> {hotel.city}</span>
              <span className="fpPrice">
                Starting from {hotel.cheapestPrice} TK
              </span>
              {hotel.rating && (
                <div className="fpRating">
                  <button>{hotel.rating}</button>
                  <span>Execllent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
