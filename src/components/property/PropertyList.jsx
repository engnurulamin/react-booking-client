import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const apiUrl = "http://localhost:8800/api/hotels/count-by-type";

  const { data, loading, error, reFetch } = useFetch(apiUrl);
  const images = [
    "https://source.unsplash.com/nEvzSXBIhiU",
    "https://source.unsplash.com/27Ulz8iIYx8",
    "https://source.unsplash.com/lXRj_eDADec",
    "https://source.unsplash.com/HjzL2rJyGW4",
    "https://source.unsplash.com/2keCPb73aQY",
  ];
  console.log("mmm", data[0].type);
  return (
    <div className="pList">
      {loading ? (
        "Loading lease wait"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem">
                <img className="pListImg" src={img} alt="" />
                <div className="pListTitle">
                  <h1>{data[i].type.toUpperCase()}</h1>
                  <h2>
                    {data[i].count} {data[i].type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
