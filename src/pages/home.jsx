import "./home.scss";
import SocialMediaBar from "../components/SocialMediaBar";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Activiteiten from "../components/Activiteiten";
import OnzeVerhalen from "../components/OnzeVerhalen";

const Home = () => {
  return (
    <div>
      <div className="fixed-menu">
        <SocialMediaBar />
        <Navbar />
      </div>

      <div className="sections">
        <Intro />
        <Activiteiten />
        <OnzeVerhalen />
      </div>
    </div>
  );
};

export default Home;
