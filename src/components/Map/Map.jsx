import React from 'react';
import './map.css';
import { motion } from 'framer-motion';
const Map = () => {
  return (
    <div className='map' id='address'>
      <div className='relative overflow-hidden'>
        <iframe
          src='https://yandex.uz/map-widget/v1/?ll=69.260075%2C41.295736&mode=whatshere&whatshere%5Bpoint%5D=69.259780%2C41.296005&whatshere%5Bzoom%5D=19&z=19'
          width='100%'
          frameborder='1'
          allowfullscreen='true'
          className='relative '
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
