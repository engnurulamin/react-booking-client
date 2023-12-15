import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const apiUrl = `http://localhost:8800/api/hotels/room/${hotelId}`;
  const { data, loading, error } = useFetch(apiUrl);
  const { dates } = useContext(SearchContext);

  const dateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let dates = [];
    while (data <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return list;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = () => {};
  return (
    <div className="reserve">
      <div className="re-container">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="re-close"
          onClick={() => setOpen(false)}
        />
        <span>Select Your rooms:</span>
        {data.map((item) => (
          <div className="re-item">
            <div className="re-item-info">
              <div className="re-title">{item.title}</div>
              <div className="re-desc">{item.desc}</div>
              <div className="re-max">
                Max People <b>{item.maxPeople}</b>
              </div>
              <div className="reprice">{item.price}</div>
            </div>
            {item.roomNumbers.map((roomNumber) => (
              <div className="room" key={roomNumber._id}>
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                />
              </div>
            ))}
          </div>
        ))}
        <button onClick={handleClick} className="re-button">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
