import "./socialMediaBar.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NlFlag from "../images/netherlands-flag.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SocialMediaBar = () => {
  return (
    <div className="socialBar">
      <div className="socialIconsContainer">
        <a href="https://youtube.com"><YouTubeIcon className="icon" /></a>
        <a href="https://facebook.com"><FacebookIcon className="icon" /></a>
        <a href="https://twitter.com"><TwitterIcon className="icon" /></a>
        <a href="https://instagram.com"><InstagramIcon className="icon" /></a>
        <a href="https://linkedin.com"><LinkedInIcon className="icon" /></a>
      </div>
      <div className="selected-language">
        <ArrowDropDownIcon className="dropdown" />
        <img src={NlFlag} alt='netherlands-flag' />
      </div>
    </div>
  );
};

export default SocialMediaBar;
