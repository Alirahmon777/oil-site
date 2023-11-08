import React, { useState } from 'react';
import img1 from '../../assets/yog1.png';
import img2 from '../../assets/yog2.png';
import img3 from '../../assets/yog3.png';
import Form from '../Form/Form';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { motion } from 'framer-motion';

import { Button, Modal } from 'antd';
import './carousel.css';
const CarouselPage = () => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [select, setselect] = useState({});
  const oils = [
    {
      id: 1,
      text: '«1 литр»',
      img: img1,
      info: '«Семейное», «Дончанка», «Донола» - 100% подсолнечное рафинированное дезодорированное масло, что подтверждено многочисленными испытаниями аккредитованных независимых организаций. Мы нацелены дать нашим потребителям лучший качественный продукт, который по своему жиро-кислотному составу самым лучшим образом подходит для организма человека.',
    },
    {
      id: 2,
      text: '«2 литров»',
      img: img2,
      info: '«Семейное», «Дончанка», «Донола» - 100% подсолнечное рафинированное дезодорированное масло, что подтверждено многочисленными испытаниями аккредитованных независимых организаций. Мы нацелены дать нашим потребителям лучший качественный продукт, который по своему жиро-кислотному составу самым лучшим образом подходит для организма человека.',
    },
    {
      id: 2,
      text: '«5 литров»',
      img: img3,
      info: '«Семейное», «Дончанка», «Донола» - 100% подсолнечное рафинированное дезодорированное масло, что подтверждено многочисленными испытаниями аккредитованных независимых организаций. Мы нацелены дать нашим потребителям лучший качественный продукт, который по своему жиро-кислотному составу самым лучшим образом подходит для организма человека.',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id='hero__section'
        className='carousel p-5 slide carousel_page production-oils'
        data-bs-ride='carousel'
      >
        <h2 className='h2 assas'>ПРОДУКЦИЯ НАШЕЙ КОМПАНИИ</h2>
        <div className='wrap'>
          {oils.map((oil, i) => (
            <div className='cart' key={i}>
              <img src={oil.img} alt='' />
              <p className='text'>{oil.text}</p>
              <div className='w-100 d-flex justify-content-center'>
                <button
                  onClick={() => {
                    setselect(oil);
                    showModal();
                  }}
                  className='mt-4'
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}

          {/* <div className='cart'>
            <img src={a[select][1].img} alt='' />
            <p className='text'>{a[select][1].text}</p>
            <div className='w-100 d-flex justify-content-center'>
              <button
                onClick={() => {
                  setselectr(1);
                  showModal();
                }}
                className=''
              >
                Подробнее
              </button>
            </div>
          </div>
          <div className='cart'>
            <img src={a[select][2].img} alt='' />
            <p className='text m-4 mb-0'>{a[select][2].text}</p>
            <div className='w-100 d-flex justify-content-center'>
              <button
                onClick={() => {
                  setselectr(2);
                  setTimeout(() => {
                    showModal();
                  }, 0.3);
                }}
                className=''
              >
                Подробнее
              </button>
            </div>
          </div> */}
        </div>
      </motion.div>
      <Modal
        width={1000}
        open={isModalOpen}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        onCancel={handleCancel}
      >
        <div className='modals w-90'>
          <div className='image'>
            <img src={select.img} alt='' />
          </div>
          <div className='text p-2'>
            <h2>Подсолнечное масло</h2>
            <span>«семейное»</span>
            <p>
              «Семейное», «Дончанка», «Донола» - 100% подсолнечное рафинированное дезодорированное масло, что
              подтверждено многочисленными испытаниями аккредитованных независимых организаций. Мы нацелены дать нашим
              потребителям лучший качественный продукт, который по своему жиро-кислотному составу самым лучшим образом
              подходит для организма человека.
            </p>
            <strong>Для подробной информацией отставьте заявку и наши специалисты свяжутся с вами</strong>
            <Form />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CarouselPage;
