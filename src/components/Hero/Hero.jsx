import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import phone from '../../assets/phone-solid.svg';
import logo from '../../assets/logoy.png';
import bgHero from '../../assets/6.png';
import oilImage from '../../assets/yog.png';

import './hero.css';

import { Button, Modal } from 'antd';
import { motion } from 'framer-motion';
import Address from '../Address/Address';
const navigation = [
  { namerus: 'О компании', nameuz: 'Kompany haqida', href: '#about_page' },
  { namerus: 'Продукция', nameuz: 'Mahsulotlar', href: '#personal' },
  { namerus: 'Преимущества', nameuz: 'Afzalliklar', href: '#lobbi' },
  { namerus: 'Сотрудничество', nameuz: 'Hamkorlik', href: '#address' },
  { namerus: 'Контакты', nameuz: "Biz bilan bog'laning", href: '#contact' },
];

function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = e => {
    const scrollTop = window.scrollY;
    scrollTop >= 80 ? setScrollTop(true) : setScrollTop(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='bg-white'>
      <header className={`header ${scrollTop ? 'scrolled' : ''}`}>
        <nav className='flex items-center justify-between px-6 py-2 lg:px-12' aria-label='Global'>
          <div className=''>
            <a href='#' className=''>
              <span className='sr-only'>Your Company</span>
              <div className='flex gap-[10px] items-center '>
                <img className='h-12 w-auto lg:h-14' src={logo} alt='' />
                <p className='text-white text-xs hidden sm:block'>Производство подсолнечных масел</p>
              </div>
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='nav_gap hidden lg:flex lg:gap-x-4 xl:gap-x-10'>
            {navigation.map(item => (
              <a
                key={item.nameuz}
                href={item.href}
                className='text-sm transition-all hover:!text-[--yellow] font-semibold leading-6 text-white'
              >
                {item.nameuz}
              </a>
            ))}
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <div href='#' className='flex align-middle gap-2 text-sm font-semibold leading-6 text-white'>
              <ion-icon style={{ fontSize: '23px' }} name='call-outline'></ion-icon> +998 (71) 200-44-77
            </div>
          </div>
        </nav>
        <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-r  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 mobileheader'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img className='h-12 w-auto' src={logo} alt='' />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-white'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className=' space-y-2 py-6'>
                  {navigation.map(item => (
                    <a
                      key={item.nameuz}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-500'
                    >
                      {item.namerus}
                    </a>
                  ))}
                </div>
                <div className='py-2 text-center'>
                  <div
                    href='#'
                    className='flex align-middle gap-2 -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-500'
                  >
                    <ion-icon style={{ fontSize: '23px' }} name='call-outline'></ion-icon> +998 (71) 200-44-77
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className='abbbos relative isolate h-screen '>
        <div className='bg-image absolute w-full h-full -z-10'>
          <img src={bgHero} alt='bg' className='object-fill w-full h-full' />
        </div>
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
        <div className='hero__wrapper flex gap-16 3xl:gap-40 4xl:gap-52 pt-14 lg:px-16 pb-6'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=' max-w-[48%] py-24 pb-44 sm:pb-40 sm:pt-40 lg:pb-44 lg:pt-28'
          >
            <div className=''>
              <div className='block relative tracking-widest rounded-full text-start py-1 3xl:text-lg 4xl:text-xl 5xl:text-2xl text-sm leading-6 akh'>
                Натуральное
              </div>
            </div>
            <div className='text-start'>
              <h1 className='font-bold tracking-wide text-white herotexter 3xl:text-[56px] 4xl:text-[68px] 5xl:text-[75px]'>
                подсолнечное масло от производителя «масло Волгодонска»
              </h1>

              <div className='mt-8' onClick={showModal}>
                <a href='#plan' style={{ backgroundColor: '#F9B101' }} className='anim_button anim_button_float'>
                  Консультация
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className='pt-16'
          >
            <img src={oilImage} alt='' className='w-[35rem] 3xl:w-[45rem] 4xl:w-[55rem]' />
          </motion.div>
        </div>

        <Modal width={1000} open={isModalOpen} okButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel}>
          <Address></Address>
        </Modal>
      </div>
    </div>
  );
}

export default Hero;
