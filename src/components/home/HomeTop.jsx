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
    <div className="font-[universe300] pt-3 text-center">
      <div className="animate-colors text-[7.5vw] uppercase leading-[7vw] flex items-center justify-center">
        The door for
      </div>

      <div className="animate-colors text-[5.5vw] uppercase leading-[5vw] flex items-center justify-center">
        all dreamer&apos;s
      </div>

      <div className="animate-colors text-[8vw] uppercase leading-[8vw] flex items-center justify-center">
        vision
      </div>
    </div>
  );
};

export default HomeTop;
