import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeTop = () => {
  useGSAP(() => {
    gsap.to('.animate-colors', {
      backgroundPositionX: '200%',
      duration: 7,
      repeat: -1,
      ease: 'linear',
    });
  });

  return (
    <div className="font-[universe500] sm:font-[universe300] sm:mt-3 text-center h-full w-full flex flex-col items-center justify-end md:justify-start mb-2 sm:mb-0">
      <div className="animate-colors text-[52px] sm:text-[8.5vw] uppercase leading-12 sm:leading-[8vw] flex items-center justify-center">
        The door for
      </div>

      <div className="animate-colors text-[38px] sm:text-[6.5vw] uppercase leading-10 sm:leading-[6vw] flex items-center justify-center">
        all dreamer&apos;s
      </div>

      <div className="animate-colors text-[54px] sm:text-[9.5vw] uppercase leading-14 sm:leading-[9vw] flex items-center justify-center">
        vision
      </div>
    </div>
  );
};

export default HomeTop;
