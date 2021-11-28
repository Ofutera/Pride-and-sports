import "./intro.scss";
import Button from "../components/UI/Button";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="wrapper-intro">
          <div className="vertical-line"></div>
          <div className="title-container">
            <h1>jezelf kunnen zijn in de sport.</h1>
          </div>
        </div>
        <Button href='https://www.google.com'>doneer</Button>
      </div>
      <div className="intro-text-wrapper">
        <h1>platform voor LHBTIQ+ in de sport</h1>
        <p>
          Stichting Pride and Sports is het nationale platform voor LHBTIQ+ in
          de sport. Pride and Sports zet zich in voor een <span style={{color:'#51B3DD'}}>veilig sportklimaat</span>
          voor <span style={{color:"#51B3DD"}}>alle sporters</span>, ongeacht hun seksuele oriëntatie,
          genderidentiteit, genderexpressie of geslachtskenmerken. Sport helpt
          bij onze persoonlijkheidsvorming en biedt een krachtig instrument voor
          verbinding in de maatschappij.
        </p>

        <p>
          Om te kunnen participeren in de samenleving en jezelf optimaal te
          kunnen ontwikkelen, is het van groot belang dat je <span style={{color:"#51B3DD"}}>overal en altijd
          jezelf kunt zijn</span>. Door te werken aan een veilig en positief
          sportklimaat voor iedereen levert Pride and Sports hieraan een
          concrete bijdrage.
        </p>

        <p>
          Als vrijwilligersorganisatie hebben wij financiële steun hard nodig.
          Je kunt een donatie overmaken op ons banknummer NL51SNSB0948383178.
        </p>
      </div>
    </>
  );
};

export default Intro;
