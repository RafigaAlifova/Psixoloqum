import "../style/header.css";
import Image from "../images/icon.png";
export default function Header() {
    return(<>
    <nav>
        <div className="logo">
            <img src={Image} alt="icon" />
            Psixoloqum
        </div>
        <ul>
            <li>Haqqımızda</li>
            <li>Fəaliyyətlərimiz</li>
            <li>Psixoloqlarımız</li>
            <li>Mərkəzlərimiz</li>
            <li>Əlaqə</li>
        </ul>

        <div className="buttons">
            <a className="first-btn">Daxil ol</a>
            <a className="second-btn">Bizə qoşul</a>
        </div>
    </nav>
    </>)
};
