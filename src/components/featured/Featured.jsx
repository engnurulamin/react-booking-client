import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="fearuredItem">
        <img
          className="fearuredImg"
          src="https://source.unsplash.com/bLobpucHIvw"
          alt=""
        />
        <div className="featutrdTitles">
          <h1>Dublin</h1>
          <h1>123 properties</h1>
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
          <h1>532 properties</h1>
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
    </div>
  );
};

export default Featured;
