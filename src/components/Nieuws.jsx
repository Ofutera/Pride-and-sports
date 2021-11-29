import React from 'react';
import './nieuws';
import PridePark from '../images/PridePark.jpg';
import Rocycle from '../images/Rocycle';
import Flaggay from '../images/flaggay.jpg';
import Ondertekenen from '../images/OndertekeninVeiligheidsalliantie.jpg';
import Football from '../images/Football.jpg';
import Allianz from '../images/Allianz.jpg';

const Nieuws = () => {
    return (
        <div className="nieuws">
            <h2>nieuws</h2>
            <div className="nieuws-container">
                <div className="nieuwsItem1">
                    <img src={PridePark} alt="Pride in the Park" />
                    <h3>Pride and Sports activiteiten tijdens Pride Amsterdam</h3>
                    <p>28 juli 2021</p>
                </div>
                <div className="nieuwsItem2">
                    <img src={Rocycle} alt="Rocycle" />
                    <h3>Rocycle x Pride and Sports</h3>
                    <p>27 juli 2021</p>
                </div>
                <div className="nieuwsItem3">
                    <img src={Flaggay} alt="Gay sports Nijmegen" />
                    <h3>Gay Sports Nijmegen organiseert Pink Summer Sports op 16 + 17 oktober</h3>
                    <p>7 juli 2021</p>
                </div>
                <div className="nieuwsItem4">
                    <img src={Ondertekenen} alt="Ondertekenen Veiligheidsalliantie" />
                    <h3>De Regenboog Veiligheidsalliantie ondertekenen</h3>
                    <p>30 juni 2021</p>
                </div>
                <div className="nieuwsItem5">
                    <img src={Allianz} alt="Allianz stadion" />
                    <h3>Ego en imago voor de UEFA belangrijker dan mensenrechten</h3>
                    <p>23 juni 2021</p>
                </div>
                <div className="nieuwsItem6">
                    <img src={Football} alt="Homo discriminatie bij mannenvoetbal" />
                    <h3>Homo discriminatie nog schrijnend actueel in het professionele mannenvoetbal</h3>
                    <p>5 juni 2021</p>
                </div>
                <button className="nieuwsBtn">meer nieuws</button>
            </div>

        </div>
    );

};

export default Nieuws;