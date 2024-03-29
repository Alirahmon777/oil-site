import React from 'react';
import img1 from '../../assets/yog133.jpg';
import { motion } from 'framer-motion';
import './teras.css';
const TerasPage = () => {
  return (
    <div className='teras_wrap mt-14' id='personal'>
      <div className='head text-center w-100'>
        <h2>Преимущества</h2>
        <p className='not-italic font-bold uppercase haybe mt-2'>Причины почему наши клиенты доверяют нам</p>
      </div>
      <div className='wrap '>
        <div className=' mt-7 mb-7 pt-5 wrap1'>
          <p className='text text-right'>
            <span className='firsttwo'>01</span> Естественность продукта
          </p>
          <p className='bobotext text-right'>
            Мы производим только натуральные подсолнечные масла без использования химических добавок или консервантов
          </p>
        </div>
        <div className='wrap2 mt-7 mb-7'>
          <p className='text text-right'>
            <span className='firsttwo'>02</span> ассортимент продуктов
          </p>
          <p className='bobotext text-right'>
            Подсолнечная компания может предложить различные продукты, такие как масло, семечки, жмых
          </p>
        </div>
        <div className='wrap3 mt-7 mb-7 pt-5'>
          <p className='text text-left'>
            <span className='firsttwo'>04</span> Экологичность
          </p>
          <p className='bobotext text-left'>
            Мы предоставляем нашим клиентам информацию о происхождении наших продуктов и процессе производства, что
            помогает установить доверительные отношения с нашими клиентами.
          </p>
        </div>
        <div className='wrap4 mt-7 mb-7 flex items-end w-[16rem]'>
          <img src={img1} alt='oil image' className='w-full' />
        </div>
        <div className='wrap5'>
          <p className='text text-left'>
            <span className='firsttwo'>05</span> Экологичность
          </p>
          <p className='bobotext text-left'>
            Мы предлагаем высококачественные продукты по конкурентоспособной цене, что делает нашу продукцию доступной
            широкой аудитории.
          </p>
        </div>
        <div className='wrap6 mt-7 mb-7'>
          <p className='text text-left'>
            <span className='firsttwo'>06</span> Естественность продукта
          </p>
          <p className='bobotext text-left'>
            подсолнечная компания может гарантировать качество своей продукции, так как она контролирует процесс
            выращивания и производства от начала до конца.
          </p>
        </div>
        <div className='wrap7 mt-7 mb-7'>
          <p className='text text-right'>
            <span className='firsttwo'>03</span> Экологичность
          </p>
          <p className='bobotext text-right'>
            Наша компания заботится о окружающей среде и использует только натуральные методы выращивания подсолнечника,
            которые не наносят вреда окружающей среде.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerasPage;
