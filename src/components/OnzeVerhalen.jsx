import "./onzeVerhalen.scss";
import TestimonialCard from "./UI/TestimonialCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const testimonialData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, venenatis ac tincidunt quis, eleifend id mi. Proinmollis urna vitae turpis interdum scelerisque.",
    name: "John Doe",
    discipline: "Tennis",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, venenatis ac tincidunt quis, eleifend id mi. Proinmollis urna vitae turpis interdum scelerisque.",
    name: "Rachel Green",
    discipline: "Volleyball",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, venenatis ac tincidunt quis, eleifend id mi. Proinmollis urna vitae turpis interdum scelerisque.",
    name: "Joey Tribbiani",
    discipline: "Boxer",
  },
  // {
  //   id: 4,
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, venenatis ac tincidunt quis, eleifend id mi. Proinmollis urna vitae turpis interdum scelerisque.",
  //   name: "Phoebe Buffay",
  //   discipline: "Rugby",
  // },
];

const OnzeVerhalen = () => {
  return (
    <div className="onze-verhalen">
      <div className="title">
        <h1>onze verhalen</h1>
      </div>
      <div className="carousel">
        <ArrowBackIosNewIcon className="arrow previous" />

          {testimonialData.map((t) => {
            return (
              <TestimonialCard
                id={t.id}
                text={t.text}
                image={t.image}
                name={t.name}
                discipline={t.discipline}
              />
            );
          })}

        <ArrowBackIosNewIcon className="arrow next" />
      </div>
    </div>
  );
};

export default OnzeVerhalen;
