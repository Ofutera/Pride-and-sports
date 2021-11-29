import "./testimonialCard.scss";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import Athlete from "../../images/athlete-portrait.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="tc-content">
        <div className="tc-header">
          <FormatQuoteRoundedIcon className="tc-quote-icon" />
        </div>
        <div className="tc-content-top">
          <div className="tc-text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              odio diam, venenatis ac tincidunt quis, eleifend id mi. Proin
              mollis urna vitae turpis interdum scelerisque.{" "}
              <span style={{ color: "#61b57e", fontWeight: "500" }}>
                Lees meer.
              </span>
            </p>
          </div>
        </div>
        <div className="tc-content-bottom">
          <img src={Athlete} className="athlete-portrait" alt="athlete-img" />

          <span className="athlete-name">John Doe</span>
          <span className="athlete-discipline">Athlete</span>
        </div>
        <div className="tc-footer">
          <div className="tc-social-icons">
            <FacebookIcon className="tc-icon" />
            <TwitterIcon className="tc-icon" />
            <LinkedInIcon className="tc-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
