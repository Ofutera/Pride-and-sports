import React from 'react';
import './nieuws.scss';
import PridePark from '../images/PridePark.jpg';
import Rocycle from '../images/Rocycle.jpg';
import Flaggay from '../images/flaggay.jpg';
import Ondertekenen from '../images/OndertekeninVeiligheidsalliantie.jpg';
import Football from '../images/Football.jpg';
import Allianz from '../images/Allianz.jpg';

const Nieuws = () => {
    return (
        <div className="nieuws">
            <h2>nieuws</h2>
            <div className="nieuws-container">
                <div className="Item">
                    <img src={PridePark} alt="Pride in the Park" />
                    <h3>Pride and Sports<br/> activiteiten tijdens Pride<br/> Amsterdam</h3>
                    <br/>
                    <p>28 juli 2021</p>
                    <hr />
                </div>
                <div className="Item">
                    <img src={Rocycle} alt="Rocycle" />
                    <h3>Rocycle x Pride and<br /> Sports</h3>
                    <br />
                    <br/>
                    <p>27 juli 2021</p>
                    <hr/>
                </div>
                <div className="Item">
                    <img src={Flaggay} alt="Gay sports Nijmegen" />
                    <h3>Gay Sports Nijmegen<br/> organiseert Pink Summer<br/> Sports op 16 + 17 oktober</h3>
                    <br/>
                    <p>7 juli 2021</p>
                    <hr/>
                </div>
                <div className="Item">
                    <img src={Ondertekenen} alt="Ondertekenen Veiligheidsalliantie" />
                    <h3>De Regenboog<br/> Veiligheidsalliantie<br/> ondertekenen</h3>
                    <br/>
                    <p>30 juni 2021</p>
                    <hr/>
                </div>
                <div className="Item">
                    <img src={Allianz} alt="Allianz stadion" />
                    <h3>Ego en imago voor de<br/> UEFA belangrijker dan<br/> mensenrechten</h3>
                    <br/>
                    <p>23 juni 2021</p>
                    <hr/>
                </div>
                <div className="Item">
                    <img src={Football} alt="Homo discriminatie bij mannenvoetbal" />
                    <h3>Homo discriminatie nog<br/> schrijnend actueel in het <br/>professionele mannenvoetbal</h3>
                    <br/>
                    <p>5 juni 2021</p>
                    <hr/>
                </div>
                <button className="nieuwsBtn">meer nieuws</button>
            </div>

        </div>
    );

};

export default Nieuws;