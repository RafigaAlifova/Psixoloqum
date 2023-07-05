import "../../style/Home/offers.css";
import Offer1 from "../../images/home/offer-1.png"
import Offer2 from "../../images/home/offer-2.png"
import Offer3 from "../../images/home/offer-3.png"
import Offer4 from "../../images/home/offer-4.png"

export default function Offers(params) {
    return(<>
    <h3 className="offers-header">Biz nələr təklif edirik?</h3>
    <div className="offers">
        <div className="card">
            <img src={Offer1} alt="" />
            <p className="head">Online Sessiyalar</p>
            <p>Evdən, işdən - öz komfort zonanızdan ayrılmadan dəstək alın</p>
            <a href="">Sessiyaya qoşul</a>
        </div>
        <div className="card">
            <img src={Offer2} alt="" />
            <p className="head">Online Sessiyalar</p>
            <p>Evdən, işdən - öz komfort zonanızdan ayrılmadan dəstək alın</p>
            <a href="">Sessiyaya qoşul</a>
        </div>
        <div className="card">
            <img src={Offer3} alt="" />
            <p className="head">Online Sessiyalar</p>
            <p>Evdən, işdən - öz komfort zonanızdan ayrılmadan dəstək alın</p>
            <a href="">Sessiyaya qoşul</a>
        </div>
        <div className="card">
            <img src={Offer4} alt="" />
            <p className="head">Online Sessiyalar</p>
            <p>Evdən, işdən - öz komfort zonanızdan ayrılmadan dəstək alın</p>
            <a href="">Sessiyaya qoşul</a>
        </div>

    </div>
    </>)
    
};
