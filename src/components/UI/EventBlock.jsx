import "./eventBlock.scss";
import EventCard from "./EventCard";

const EventBlock = (props) => {
  return (
    <>
      <h2>{props.events[0].monthFull}</h2>
      <div className="event-block">
          {props.events.map((event, i) => {
            return (
              <EventCard
                key={event.id}
                dayName={event.dayName}
                dayNumber={event.dayNumber}
                month={event.month}
                title={event.title}
                time={event.time}
                color={props.colors[i + props.colorStart]}
              />
            );
          })}
        </div>
    </>
  );
};

export default EventBlock;
