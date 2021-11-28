import "./eventCard.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const EventCard = (props) => {
  return (
    <div className="event-card">
      <div className="stripe-left" style={{ 'background-color': props.color}}/>
      <div className="date-container">
        <span className="day-name">{props.dayName}</span>
        <span className="day-number">{props.dayNumber}</span>
        <span className="month">{props.month}</span>
      </div>
      <div className="event-details">
        <div className="title">{props.title}</div>
        <div className="time-info">
          <span className="clock-icon-wrapper">
            <AccessTimeIcon className="clock-icon" />
          </span>
          <span className="time">{props.time}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
