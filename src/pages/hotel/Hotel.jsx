import "./hotel.css";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mail/MailList";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const apiUrl = `http://localhost:8800/api/hotels/find/${id}`;
  // const apiUrl = `http://localhost:8800/api/hotels/find/6554f70d675374d2fbebc001`;
  const { data, loading, error, reFetch } = useFetch(apiUrl);
  // let photos = [
  //   { src: "https://source.unsplash.com/VGs8z60yT2c" },
  //   { src: "https://source.unsplash.com/AH8zKXqFITA" },
  //   { src: "https://source.unsplash.com/aRT5UCf2MYY" },
  //   { src: "https://source.unsplash.com/xc4oxgAbDmw" },
  //   { src: "https://source.unsplash.com/KRRB1MJFVpI" },
  //   { src: "https://source.unsplash.com/sMh8FU25ZkE" },
  // ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Data is loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img src={photos[slideNumber]} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over {data.cheapestPrice}TK at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.desc}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
