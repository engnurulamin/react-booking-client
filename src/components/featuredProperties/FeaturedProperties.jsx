import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://source.unsplash.com/rlwE8f8anOc"
          alt=""
          className="fpImg"
        />
        <span className="fpName"> Apart Hotel</span>
        <span className="fpCity"> Sylhet</span>
        <span className="fpPrice">Starting from 2000 TK</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Execllent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://source.unsplash.com/_twiIcIsp2s"
          alt=""
          className="fpImg"
        />
        <span className="fpName"> Apart Hotel</span>
        <span className="fpCity"> Sylhet</span>
        <span className="fpPrice">Starting from 2000 TK</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Execllent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://source.unsplash.com/2gOxKj594nM"
          alt=""
          className="fpImg"
        />
        <span className="fpName"> Apart Hotel</span>
        <span className="fpCity"> Sylhet</span>
        <span className="fpPrice">Starting from 2000 TK</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Execllent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
