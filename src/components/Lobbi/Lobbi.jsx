import React from "react";
import "./lobbi.css";
import img1 from "../../assets/bg.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img13 from "../../assets/img13.jpg";
import img16 from "../../assets/img16.jpg";
import { createBox, motion } from "framer-motion";
const Lobbi = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black" }} className="lobbi_wrap" id="lobbi" >
        <p className="headp" style={{width:"100%",textAlign:"center" }}>процесс работы</p>
        <h2 className="headh2" >этапы нашего сотрудничества</h2>
        <div className="boxs">
          <div className="box box1">
            <p className="text"><span className="firsttwo">01</span> Заключение договора</p>
            <div className="bigtext">Первый этап сотрудничества начинается с заключения договора, в котором мы обсуждаем требования клиента к продукции и условия поставки.</div>
          </div>
          <div className="box box2">
            <p className="text"><span className="firsttwo">02</span> Производство продукции</p>
            <div className="bigtext">Мы используем только высококачественные семена подсолнечника и натуральные методы выращивания, чтобы обеспечить высокое качество нашей продукции.</div>
          </div>
          <div className="box box3">
            <p className="text"><span className="firsttwo">03</span> Доставка продукции</p>
            <div className="bigtext">Мы работаем с надежными логистическими компаниями, чтобы гарантировать своевременную и безопасную доставку продукции нашим клиентам.</div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Lobbi;
