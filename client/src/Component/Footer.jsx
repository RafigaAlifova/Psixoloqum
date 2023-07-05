import "../style/footer.css";
import Icon from "../images/icon.png";
import arrow from "../images/arrow.png";
import twitter from "../images/social-media/twitter.png"
import facebook from "../images/social-media/facebook.png"
import instagram from "../images/social-media/instagram.png"
import linkedin from "../images/social-media/linkedin.png"

export default function Footer() {
    
    
    return(<>
        <div className="footer">
            <p className="say-hi">Bizə <span>salam</span> deyin.</p>
            <div className="first">
                <p>Daha gözləməyin. İndi bizimlə əlaqə saxlayın və psixoloqum platformasının yarada biləcəyi fərqi hiss edin. Biz hər addımda sizin üçün burdayıq.</p>
                <div className="form">
                    <input type="email" name="" id="" placeholder="e-mail"/>
                    <div className="relative">
                        <a href=""  >İndi abunə olun <img src={arrow} alt="" /></a>
                   <div className="form-back"> 
                    </div>
                    
                    </div>
                </div>
            </div>
            <div className="logo"> <img src={Icon} alt="" /> Psixoloqum</div>
          
                <div className="nav">
                <ul>
            <li>Haqqımızda</li>
            <li>Fəaliyyətlərimiz</li>
            <li>Psixoloqlarımız</li>
            <li>Mərkəzlərimiz</li>
            <li>Əlaqə</li>
        </ul>
                    <div className="social-media">
                      <img src={facebook} alt="facebook-icon" />
                   <img src={instagram} alt="instagram-icon" />
                       <img src={linkedin} alt="linkedin-icon" />
                   <img src={twitter} alt="twitter-icon" />
               
                </div>
               
            </div>
        </div>
        </>
    )
};
