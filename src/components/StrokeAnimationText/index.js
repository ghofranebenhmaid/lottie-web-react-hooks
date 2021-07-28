import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';
import { Container, item } from './Animations.js';

function StrokeAnimation() {
   const container = useRef(null);

   useEffect(() => {
      lottie.loadAnimation({
         container: container.current,
         renderer: 'svg',
         loop: true,
         autoplay: true,
         animationData: require('../../assets/StrokeAnimationGhofrane.json'),
      });
   }, []);

   return (
      <motion.div
         variants={Container}
         initial='hidden'
         animate='visible'
         className='hero'
      >
         <div className='content' ref={container} />
         <motion.h1 variants={item}>
            Frontend Developer & UI / UX Designer
         </motion.h1>
      </motion.div>
   );
}

export default StrokeAnimation;
