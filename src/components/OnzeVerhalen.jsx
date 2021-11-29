import "./onzeVerhalen.scss";
import TestimonialCard from "./UI/TestimonialCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const OnzeVerhalen = () => {
  return (
    <div className="onze-verhalen">
      <div className="title">
        <h1>onze verhalen</h1>
      </div>
      <div className="carousel">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <ArrowBackIosNewIcon className="next-arrow" />
      </div>
    </div>
  );
};

export default OnzeVerhalen;
