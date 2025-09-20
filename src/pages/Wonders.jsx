import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WonderCard from '../components/wonders/WonderCard';

const wonders = [
  {
    pic1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
    pic2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  },
  {
    pic1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
    pic2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  },
  {
    pic1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
    pic2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  },
  // {
  //   pic1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
  //   pic2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  // },
  // {
  //   pic1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
  //   pic2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  // },
  // {
  //   pic1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
  //   pic2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  // },
  // {
  //   pic1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
  //   pic2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  // },
  // {
  //   pic1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
  //   pic2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
  // },
];

const Wonders = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from('.card', {
      height: '80px',
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: '.cardParent',
        markers: true,
        start: 'top 100%',
        end: 'top -140%',
        scrub: true,
      },
    });
  });

  return (
    <div className="p-2">
      <div className="pt-[45vh]">
        <h2 className="text-[9vw] uppercase">Wonders</h2>
      </div>
      <div className="-mt-12 cardParent">
        {wonders.map((wonder, index) => (
          <div key={index} className="card w-full h-[500px] flex gap-2 mb-2">
            <WonderCard pic1={wonder.pic1} pic2={wonder.pic2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wonders;
