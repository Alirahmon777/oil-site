import React from 'react';
import './about.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from 'framer-motion';
import space from '../../assets/Rectangle1329.png';

const About = () => {
  return (
    <div id='about_page' className='about_section px-6 sm:px-16 lg:px-10'>
      <div className='about_page_wrap lg:px-28'>
        <div className='about_page_content'>
          <div>
            <div className='imgwrap'>
              <img className='bigimg' src={space} alt='' />
              <img className='kichimg1' src={space} alt='' />
              <img className='kichimg2' src={space} alt='' />
            </div>
          </div>
          <div className='textwrap'>
            <motion.h2
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className='aboutcompany text-left mb-3'>О компании</p>
            </motion.h2>
            <div>
              <p className='abouth'>натуральные подсолнечные масла высочайшего качества от производителя</p>
              <p className='aboutp mt-3'>
                Наша компания по производству подсолнечного масла занимается производством высококачественного продукта
                для здорового образа жизни <strong>«Семейное»</strong>, <strong>«Дончанка»</strong>,{' '}
                <strong>
                  «<span className='text-[#5A9213]'>Donola</span>»
                </strong>{' '}
                - 100% подсолнечное рафинированное дезодорированное масло, что подтверждено многочисленными испытаниями
                аккредитованных независимых организаций.
              </p>
              <p className='aboutp mt-3'>
                Мы нацелены дать нашим потребителям лучший качественный продукт, который по своему жиро-кислотному
                составу самым лучшим образом подходит для организма человека. Политика в области качества на предприятии
                предусматривает корпоративную ответственность всего персонала за конечный результат, а основной своей
                задачей коллектив считает удовлетворение потребностей каждой семьи, любого человека в высококачественных
                продуктах. Выпуск продукции производится согласно ТР ТС 024/2011 «Технический регламент на масложировую
                продукцию» и соответствует ГОСТ на подсолнечное масло (ГОСТ 1129-2013),
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
