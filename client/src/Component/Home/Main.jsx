import Header from "../Header"
import "../../style/Home/main.css";
import Icon from "../../images/home/main-icon.png" 
import Play from "../../images/home/play.png" 
export default function Main() {
    return(
    <div className="main">
      <div className="main-layout">
         <Header/>
        <div className="main-container">
       <div className="first"> 
         <h1><span>Daxilindəki “SƏN”i</span> Kəşf Etməyə Bugündən Başla!</h1>
        <p>Sağlam düşüncə ilə özünə daha parlaq gələcək inşa etmək istəyirsən? O zaman bu yolda ilk addımı bizimlə at.</p>
        <div className="buttons">
          <a href="" className="first">Bizə qoşul</a>
          <a href=""><img src={Play} alt="" /> Niyə Biz?</a>
        </div>
       </div>
       <img src={Icon} alt="" />
       </div>
      </div>
    
        </div>
      )
};
