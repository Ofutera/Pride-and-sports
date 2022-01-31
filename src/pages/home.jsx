import "./home.scss";
import SocialMediaBar from "../components/SocialMediaBar";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Activiteiten from "../components/Activiteiten";
import OnzeVerhalen from "../components/OnzeVerhalen";
import Nieuws from "../components/Nieuws";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Form from "../components/Form";


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
        <Form />
        <Carousel />
        <OnzeVerhalen />
        <Nieuws />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
