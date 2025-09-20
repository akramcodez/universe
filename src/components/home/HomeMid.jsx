import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HomeMid = () => {
  useGSAP(() => {
    gsap.to('.animate-colors', {
      backgroundPositionX: '200%',
      duration: 7,
      repeat: -1,
      ease: 'linear',
    });
  });

  return (
    <div className="font-[universe300] w-screen flex items-center justify-end mb-6">
      <div className="text-sm leading-4 max-w-[250px] md:max-w-sm animate-colors mx-2 indent-10">
        The universe keeps its secrets in quiet darkness, where stars tell
        stories no one can fully hear and galaxies turn like silver spirals
        across an endless night; black holes stay silent, time shifts like a
        half-forgotten dream, and in the pause between heartbeats we feel its
        mystery, knowing that only wonder can unlock it.
      </div>
    </div>
  );
};

export default HomeMid;
