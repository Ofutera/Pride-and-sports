import "./activiteiten.scss";
import EventBlock from "../components/UI/EventBlock";

const Activiteiten = () => {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  let totalNoOfEventsSoFar = 0; 

  const DUMMY_EVENTS = [
    [
      {
        id: 1,
        dayName: "MON",
        dayNumber: 25,
        month: "OCT",
        monthFull: "october",
        title: "Netzo Sinterklaas",
        time: "17:00 - 21:00",
      },
      {
        id: 2,
        dayName: "TUE",
        dayNumber: 26,
        month: "OCT",
        monthFull: "october",
        title: "Smashing Tennis",
        time: "17:00 - 21:00",
      },
      {
        id: 3,
        dayName: "WED",
        dayNumber: 27,
        month: "OCT",
        monthFull: "october",
        title: "Kicking Football",
        time: "19:00 - 23:00",
      },
    ],
    [
      {
        id: 1,
        dayName: "MON",
        dayNumber: 25,
        month: "NOV",
        monthFull: "november",
        title: "DFLKAWJDFLAS",
        time: "17:00 - 21:00",
      },
      {
        id: 2,
        dayName: "TUE",
        dayNumber: 26,
        month: "NOV",
        monthFull: "november",
        title: "SDLJKFHASL",
        time: "17:00 - 21:00",
      },
      {
        id: 3,
        dayName: "WED",
        dayNumber: 27,
        month: "NOV",
        monthFull: "november",
        title: "Kicking Football",
        time: "19:00 - 23:00",
      },
    ],
  ];

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple' ];

  return (
    <>
      <div className="wrapper-act">
        <div className="act-left">
          <div className="img-container">
            <div className="img-volley" />
          </div>
        </div>
        <div className="act-right">
          <h1>activiteiten</h1>
          {DUMMY_EVENTS.map((monthArray, i) => {
            const rendered = <EventBlock events={monthArray} month={currentMonth} colors={colors} colorStart={totalNoOfEventsSoFar}/>;
            totalNoOfEventsSoFar += monthArray.length;
            return rendered;
          })}
        </div>
      </div>
    </>
  );
};

export default Activiteiten;
