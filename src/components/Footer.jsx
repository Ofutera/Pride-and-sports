import React from 'react';
import './footer.scss';
import Instapost2 from '../images/post2.png';
import Instapost3 from '../images/post3.png';
import Instapost4 from '../images/post4.png';
import Instapost5 from '../images/post5.png';
import LogoSmall from '../images/logosmall.png';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
            <div className="instagram">
                <h2>instagram</h2>
                    <div className="instagram-container">
                        <div className="logo">
                            <img src={ LogoSmall} alt="Pride and Sports logo" />                     
                            <p className='social-title'>Pride and Sports</p>
                            <p className="socials-day">1 day ago</p>
                        </div>                       
                        <div className="posts">
                            <img src={Instapost2} alt="post instagram"/>
                            <img src={Instapost3} alt="post instagram"/>
                            <img src={Instapost4} alt="post instagram"/>
                            <img src={Instapost5} alt="post instagram"/>
                        </div>
                        
                    <button className="instagramBtn">volg</button>
                </div>
            </div>
            <div className="facebook">
                <h2>facebook</h2>
                    <div className="facebook-container">
                        <div className="logo">
                            <img src={LogoSmall} alt="Pride and Sports logo" />
                        </div>                    
                    <p className='social-title'>Pride and Sports</p>
                    <p className="socials-day">1 day ago</p>
                        <button className="facebookBtn">volg</button>
                <div class="fb-post" data-href="https://www.facebook.com/prideandsports/posts/429978715203762" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/prideandsports/posts/429978715203762" class="fb-xfbml-parse-ignore">Geplaatst door <a href="https://www.facebook.com/prideandsports/">Pride and Sports</a> op&nbsp;<a href="https://www.facebook.com/prideandsports/posts/429978715203762">Dinsdag 23 november 2021</a></blockquote></div>
                    <p>Tijdens de live stream van &#064;centrumveiligesportnl was Laura van Beckhoven<br/> een van de drie ervaringsdeskundigen, naast...</p>
                    </div>
            </div>
            <div className="youtube">
                <h2>youtube</h2>
                    <div className="youtube-container">
                        <div className="logo">
                            <img src={LogoSmall} alt="Pride and Sports logo" />
                        </div>
                    
                    <p className='social-title'>Pride and Sports</p>
                    <p className="socials-day">1 day ago</p>
                    <button className="youtubeBtn">subscribe</button>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lIaGEB4WfRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        </div>
    );
};
export default Footer;