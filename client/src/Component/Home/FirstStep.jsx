import "../../style/Home/first-step.css";
import calendar from "../../images/home/calendar.png"
import lifestories from "../../images/home/lifestories.png"
import lovely from "../../images/home/lovely.png"
import Vusale from "../../images/home/Vusale.png"
export default function FirstStep(params) {
        return(<>
            <div className="first-step">
                <div className="text-part"> 
                    <p className="head">
                    İnanırıq ki, bizimlə özünüzü qayğı dolu hiss edəcəksiniz
                    </p>
                    <p>
                    Bizimlə siz özünüzə, ailənizə və dostlarınıza uyğun
istədiyiniz professional psixoloqu tapıb, digər öz həyatını dəyişmiş insanların uğur hekayələrini  oxuyub-dinləməklə daha da motivasiya ola bilərsiniz.3
                    </p>
                    <a href="#">İlk Addımı At</a>
                </div>

            <img src={calendar} className="calendar" alt="" />
            <img src={lifestories} className="lifestories" alt="" />
            <img src={lovely} className="lovely" alt="" />
            <img src={Vusale} className="vusale" alt="" />
                
            </div>
            </>)
    };
    