import "../../style/Home/psychologists.css";
import p1 from "../../images/psychos/p1.png";
import p2 from "../../images/psychos/p2.png";
import p3 from "../../images/psychos/p3.png";
import p4 from "../../images/psychos/p4.png";

export default function Psychologists(params) {
    let psychos=[{img:p1,
                name: "Həcər Soltanova",
                describe:"“Bakı Modern Psixoloji Sağlamlıq və Nitq Mərkəzi” rəhbəri, psixoloq, təlimçi"},
                {img:p2,
                name: "Vüsalə Əmiraslanova",
                describe:"“Bakı Modern Psixoloji Sağlamlıq və Nitq Mərkəzi” rəhbəri, psixoloq, təlimçi"},
                {img:p3,
                name: "Ramidə Oktayqızı",
                describe:"“Bakı Modern Psixoloji Sağlamlıq və Nitq Mərkəzi” rəhbəri, psixoloq, təlimçi"},
                {img:p4,
                name: "Nuranə Səfər", 
                describe:"“Bakı Modern Psixoloji Sağlamlıq və Nitq Mərkəzi” rəhbəri, psixoloq, təlimçi"},
                ]
                console.log(psychos[0].img)
    return(<>
        <h3 className="psycho-header">Psixoloqlarımız</h3>
        <div className="psycho">
        <div className="card">
          <img src={psychos[0].img} alt="" />
            <p className="head">{psychos[0].name}</p>
            <p>{psychos[0].describe}</p>
        </div>
        <div className="card">
            <img src={psychos[1].img} alt="" />
            <p className="head">{psychos[1].name}</p>
            <p>{psychos[1].describe}</p>
        </div>
        <div className="card">
            <img src={psychos[2].img} alt="" />
            <p className="head">{psychos[2].name}</p>
            <p>{psychos[2].describe}</p>
        </div>
        <div className="card">
            <img src={psychos[3].img} alt="" />
            <p className="head">{psychos[3].name}</p>
            <p>{psychos[3].describe}</p>
        </div>
        </div>
        </>)
    
};
