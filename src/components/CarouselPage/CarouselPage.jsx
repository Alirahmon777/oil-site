import React, { useState } from 'react';
import bgSeed from '../../assets/bg-seed.png';
import Form from '../Form/Form';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { motion } from 'framer-motion';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Button, Modal } from 'antd';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import './carousel.css';
import { oils } from '../../data/index.js';
import { Swiper, SwiperSlide } from 'swiper/react';
const CarouselPage = () => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [select, setselect] = useState({});

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
        className='carousel p-5 slide carousel_page production-oils relative'
        data-bs-ride='carousel'
      >
        <div className='absolute -left-40 md:-left-28 lg:-left-14 xl:left-0'>
          <img src={bgSeed} alt='' />
        </div>
        <h2 className='h2 assas'>ПРОДУКЦИЯ НАШЕЙ КОМПАНИИ</h2>
        <Swiper
          className=''
          modules={[A11y, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {oils.map((oil, i) => (
            <SwiperSlide key={i}>
              <div className='cart'>
                <img src={oil.img} alt='' />
                <p className='text mt-2'>{oil.text}</p>
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
            </SwiperSlide>
          ))}
        </Swiper>

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
