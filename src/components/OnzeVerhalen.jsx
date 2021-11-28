import "./onzeVerhalen.scss";
import TestimonialCard from "./UI/TestimonialCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const OnzeVerhalen = () => {
  return (
    <div className="section">
      
        <h2>onze verhalen</h2>
        <div className="carousel">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
            <ArrowBackIosNewIcon className="carousel-arrow" />
          </div>
          
      </div>
  );
};

export default OnzeVerhalen;
