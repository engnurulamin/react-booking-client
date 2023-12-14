import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Reserve = () => {
  return (
    <div className="reserve">
      <div className="reserve-container">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="re-close"
          onClick={() => setOpen(false)}
        />
        <span>Select Your rooms:</span>
      </div>
    </div>
  );
};

export default Reserve;
