import "./testimonialCard.scss";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Athlete from '../../images/athlete-portrait.jpg';

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card">
      <div className="tc-content">
        <div className="tc-header">
          <FormatQuoteRoundedIcon className="tc-quote-icon" />
        </div>
        <div className="tc-content-top">
          <div className="tc-text-container">
            <p>
              {props.text}
              <span style={{ color: "#61b57e", fontWeight: "500" }}>
              {" "}Lees meer.
              </span>
            </p>
          </div>
        </div>
        <div className="tc-content-bottom">
          <img src={Athlete} className="athlete-portrait" alt="athlete-img" />

          <span className="athlete-name">{props.name}</span>
          <span className="athlete-discipline">{props.discipline}</span>
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
