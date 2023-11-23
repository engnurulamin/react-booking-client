import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const apiUrl =
    "http://localhost:8800/api/hotels/count-by-city?cities=Sylhet,Dhaka";

  const { data, loading, error, reFetch } = useFetch(apiUrl);
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="fearuredItem">
            <img
              className="fearuredImg"
              src="https://source.unsplash.com/bLobpucHIvw"
              alt=""
            />
            <div className="featutrdTitles">
              <h1>Dublin</h1>
              <h1>{data[0]} properties</h1>
            </div>
          </div>
          <div className="fearuredItem">
            <img
              className="fearuredImg"
              src="https://source.unsplash.com/YZUgnOTxA44"
              alt=""
            />
            <div className="featutrdTitles">
              <h1>Austin</h1>
              <h1>{data[1]} properties</h1>
            </div>
          </div>
          <div className="fearuredItem">
            <img
              className="fearuredImg"
              src="https://source.unsplash.com/Nh8K3V6vucM"
              alt=""
            />
            <div className="featutrdTitles">
              <h1>Reno</h1>
              <h1>533 properties</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
