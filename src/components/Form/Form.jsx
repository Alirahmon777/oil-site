import React from "react";
import "./form.css";
import { UserOutlined } from '@ant-design/icons';
import { Cascader, Input, Select, Space } from 'antd';
const Form = () => {
  const selectBefore = (
    <Select defaultValue="+998">
      <Option value="+998">+998</Option>
    </Select>
  );
  function handleclick() {
    document.getElementById("tel").value = ""
    document.getElementById("name").value = ""
  }
  return (
    <div>
      <div className="inputs d-flex gap-4">
      <div className="oneinput">
        <label className="inputlabel" htmlFor="name">Ваше имя</label>
        <Input width="200px" id="name" classNames={"input"} placeholder="large size" prefix={<UserOutlined />} />
      </div>
      <div className="oneinput">
        <label className="inputlabel" htmlFor="tel">Номер телефона</label>
        <Input id="tel" addonBefore={selectBefore} />
      </div>
    </div>
      <div className="bottom-10 mt-16 sm:mt-20 relative">
        <button style={{ backgroundColor: "#F9B101" }} className="anim_button anim_button_float" onClick={handleclick}>отправить</button>
      </div>
    </div>
  );
};

export default Form;
