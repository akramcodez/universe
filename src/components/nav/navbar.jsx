import React, { useRef } from 'react';
import { NavbarContext } from '../../context/NavContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { navOpen, setNavOpen } = React.useContext(NavbarContext);
  const navDivRef = useRef(null);
  return (
    <div className="flex fixed top-0 w-full items-start justify-between z-4">
      <div className="p-1.5">
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
        onClick={() => setNavOpen(!navOpen)}
        onMouseEnter={() => {
          navDivRef.current.style.height = '100%';
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          navDivRef.current.style.height = '0%';
          setIsOpen(false);
        }}
        className="h-10 w-46 md:w-42 lg:w-[15vw] relative bg-black cursor-pointer"
      >
        <div
          ref={navDivRef}
          className={`bg-[#C084FC] transition-all duration-300 ease-in-out absolute top-0 h-0 w-full flex flex-col items-end overflow-hidden`}
        ></div>
        <div className="relative flex flex-col items-end p-4 gap-1.5">
          <div
            className={`${isOpen ? 'bg-black' : 'bg-white'} w-[30%] h-[2px]`}
          ></div>
          <div
            className={`${isOpen ? 'bg-black' : 'bg-white'} w-[20%] h-[2px]`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
