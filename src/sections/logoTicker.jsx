"use client";
import Image from 'next/image';
import {motion, useScroll} from "framer-motion";
import { useRef } from 'react';

const LogoTicker = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef, 
    offset: ["start end", "end start"],
  });

  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div 
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image 
              src="/assest/AI.png" 
              alt="Aceme Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            <Image 
              src="/assest/deep.png" 
              alt="Quantum Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            <Image 
              src="/assest/deep2.png" 
              alt="Echo Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            <Image 
              src="/assest/deep3.png" 
              alt="Celestial Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            <Image 
              src="/assest/M.jpeg" 
              alt="Apex Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            
            <Image 
              src="/assest/ml.png" 
              alt="Aceme Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            <Image 
              src="/assest/AI.png" 
              alt="Quantum Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            <Image 
              src="/assest/deep.png" 
              alt="Echo Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            <Image 
              src="/assest/deep2.png" 
              alt="Celestial Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            <Image 
              src="/assest/deep3.png" 
              alt="Apex Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            <Image 
              src="/assest/M.jpeg" 
              alt="Apex Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
            <Image 
              src="/assest/ml.png" 
              alt="Apex Logo" 
              className="logo-ticker-image" 
              width={70} 
              height={70} 
              layout="intrinsic" 
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
