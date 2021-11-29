import React from 'react';
import { Instagram, Facebook, Youtube } from 'reactjs-social-embed';
import './footer.scss';


const Footer = () => {
    return (
        <div className="footer">
            <div className="instagram">
                <h2>instagram</h2>
                <div className="instagram-container">
                    <img src="../images/logo.gif" alt="Pride and Sports logo" />
                    <p className='social-title'>Pride and Sports</p>
                    <p className="socials-day">1 day ago</p>
                    <Instagram url="https://www.instagram.com/p/CWnzSbloKrT/?utm_source=ig_web_copy_link" />
                    <Instagram url="https://www.instagram.com/p/CVhdFgrInIE/?utm_source=ig_web_copy_link" />
                    <button className="instagramBtn">volg</button>
                </div>
            </div>
            <div className="facebook">
                <h2>facebook</h2>
                <div className="facebook-container">
                    <img src="../images/logo.gif" alt="Pride and Sports logo" />
                    <p className='social-title'>Pride and Sports</p>
                    <p className="socials-day">1 day ago</p>
                    <button className="facebookBtn">volg</button>
                    <Facebook type="post" width="100%" height="680px" show_text={true} 
                    url="https://www.facebook.com/prideandsports/posts/430605411807759"
                    />
                    <Facebook type="post" width="100%" height="680px" show_text={true} 
                    url="https://www.facebook.com/prideandsports/posts/429978715203762"
                    />
                </div>
            </div>
            <div className="youtube">
                <h2>youtube</h2>
                <div className="youtube-container">
                    <img src="../images/logo.gif" alt="Pride and Sports logo" />
                    <p className='social-title'>Pride and Sports</p>
                    <p className="socials-day">1 day ago</p>
                    <button className="youtubeBtn">subscribe</button>
                    <Youtube width="100%" parentClass="p-container" iframeClass="v-container" id="gWfcDFiSizg" />
                </div> 
            </div>
            <div className="contact">
                <h2>contact</h2>
                <p>Stichting Pride and Sports</p>
                <address>
                    Zocherstraat 50c<br/>
                    1054 LZ AMSTERDAM<br/>
                    <a href="mailto:contact@prideandsports.com">contact@prideandsports.nl</a>
                </address>
                <p>
                    KVK 68713592<br/>
                    RSIN 857559722<br/>
                    NL51SNSB0948383178 <br/>     
                </p>
                
            </div>
                <div className="nieuwsbrief">
                    <p>nieuwsbrief</p>
                        <form action="">
                            <input type="text" id="fname" name="fname" value="voornaam"/><br/>
                            <input type="text" id="lname" name="lname" value="achternaam"/><br/>
                            <input type="email" id="email" name="email" value="e-mailadres"/><br/>
                            <input type="submit" value="abonneer"/>               
                        </form>
                </div>
        </div>
    );
};
export default Footer;