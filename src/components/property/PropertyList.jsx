import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          className="pListImg"
          src="https://source.unsplash.com/nEvzSXBIhiU"
          alt=""
        />
        <div className="pListTitle">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImg"
          src="https://source.unsplash.com/27Ulz8iIYx8"
          alt=""
        />
        <div className="pListTitle">
          <h1>Villas</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImg"
          src="https://source.unsplash.com/lXRj_eDADec"
          alt=""
        />
        <div className="pListTitle">
          <h1>Cabins</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImg"
          src="https://source.unsplash.com/HjzL2rJyGW4"
          alt=""
        />
        <div className="pListTitle">
          <h1>Residence</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImg"
          src="https://source.unsplash.com/2keCPb73aQY"
          alt=""
        />
        <div className="pListTitle">
          <h1>Resort</h1>
          <h2>233 Resort</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
