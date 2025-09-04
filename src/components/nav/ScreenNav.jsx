import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useContext } from 'react';
import { NavbarContext } from '../../context/NavContext';

const ScreenNav = () => {
  const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);
  const { navOpen, setNavOpen } = useContext(NavbarContext);

  // useGSAP(() => {
  //   const tl = gsap.timeline();

  //   tl.from('.stairing', {
  //     delay: 0.5,
  //     height: 0,
  //     stagger: {
  //       amount: -0.25,
  //     },
  //   });
  //   tl.from(fullNavLinkRef.current, {
  //     opacity: 0,
  //   });
  //   tl.from('.link', {
  //     opacity: 0,
  //     rotateX: 90,
  //     stagger: {
  //       amount: 0.25,
  //     },
  //   });

  //   tl.pause();
  //   if (navOpen) {
  //     tl.play();
  //   } else {
  //     tl.reverse();
  //   }
  // }, [navOpen]);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to('.fullscreennav', { display: 'block' });
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.3,
      },
    });
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to('.navlink', {
      opacity: 1,
    });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to('.stairing', {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to('.navlink', {
      opacity: 0,
    });
    tl.to('.fullscreennav', {
      display: 'none',
    });
  }

  useGSAP(() => {
    if (navOpen) {
      gsapAnimation();
    } else {
      gsapAnimationReverse();
    }
  }, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      id="fullScreen"
      className={`fullscreennav overflow-hidden h-screen w-full absolute z-50`}
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinkRef} className="relative">
        <div className="navlink flex w-full p-1.5 justify-between items-start">
          <div className="">
            <div className="w-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                fill="white"
                viewBox="0 0 103 44"
                aria-hidden="true"
              >
                <g stroke="none" transform="translate(6,4)">
                  <rect x="0" y="0" width="8" className="h-full" />
                  <rect x="0" y="34" width="30" height="6" />
                  <rect x="22" y="0" width="8" className="h-full" />

                  <g transform="translate(35,0)">
                    <rect x="0" y="0" width="10" className="h-full" />
                    <polygon points="9.6,0   36,0   36,7.2   16.8,7.2   36,31.2   28,31.2   9.6,9.6" />
                    <rect x="28" y="0" width="8" className="h-full" />
                  </g>

                  <g transform="translate(76,0)">
                    <rect x="0" y="0" width="40" height="6" />
                    <rect x="6.5" y="0" width="8" className="h-full" />
                    <rect x="0" y="34" width="40" height="6" />
                    <polygon points="12,0 16,0 10,6 12,6" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div
            onClick={() => setNavOpen(false)}
            className="h-20 w-20 relative cursor-pointer crossParent"
          >
            <div className="h-28 w-[2px] bg-[#fff] absolute -rotate-45 origin-top crossChild"></div>
            <div className="h-28 w-[2px] bg-[#fff] absolute rotate-45 origin-top right-0 crossChild"></div>
          </div>
        </div>
        <div className="pt-20">
          <div className="link origin-top relative border-t-[1px] cursor-pointer">
            <h1 className="font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
              Projects
            </h1>
            <div className="movelink absolute top-0 flex gap-4 bg-[#C084FC] text-black">
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
              </div>
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-[1px] cursor-pointer">
            <h1 className="font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
              Projects
            </h1>
            <div className="movelink absolute top-0 flex gap-4 bg-[#C084FC] text-black">
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
              </div>
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-[1px] cursor-pointer">
            <h1 className="font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
              Projects
            </h1>
            <div className="movelink absolute top-0 flex gap-4 bg-[#C084FC] text-black">
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
              </div>
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-[1px] border-b-[1px] cursor-pointer">
            <h1 className="font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
              Projects
            </h1>
            <div className="movelink absolute top-0 flex gap-4 bg-[#C084FC] text-black">
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
              </div>
              <div className="moveX flex items-center gap-4">
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
                <h2 className="whitespace-nowrap font-[universe500] text-[7.5vw] text-center uppercase leading-[6.5vw] pt-4">
                  Pour Tout Voir
                </h2>
                <img
                  className="h-20 w-56 object-cover shrink-0 rounded-full"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenNav;
