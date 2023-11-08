import React from "react";
import "./address.css";
import img from "../../assets/img.jpg";
import { motion } from "framer-motion";
import Form from "../Form/Form";

const Address = () => {
  
  return (
    <div className="address_wrap">
      <motion.div initial={{ x: "-100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} className="address_content">
        <h3 className="section_title">Заполните форму</h3>
        <p className="section_paragrph">
          Получите консультацию и начните сотрудничество
        </p>
        <span className="section_span">Наш менеджер свяжется с вами для консультации и обсуждения дальнейших шагов</span>
        <Form></Form>
      </motion.div>
      <motion.div initial={{ x: "100%" }}
        whileInView={{ x: "0" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }} className="address_carousel">
        <img src={img} alt="" />
      </motion.div>

    </div>
  );
};

export default Address;
