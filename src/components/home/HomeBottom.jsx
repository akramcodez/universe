import { Link } from 'react-router-dom';

const HomeBottom = () => {
  return (
    <div className="font-[universe500] flex items-center justify-center gap-3 pb-5">
      <div className="border-1 sm:border-2 flex items-center px-7 border-white rounded-full uppercase cursor-pointer hover:border-[#C084FC] hover:text-[#C084FC]">
        <Link
          to="/wonders"
          className="text-2xl sm:text-[3.5vw] leading-5 sm:leading-[3.5vw] pt-1.5 sm:pt-2 pb-0.5 sm:pb-0"
        >
          Wonders
        </Link>
      </div>
      <div className="border-1 sm:border-2 flex items-center px-7 border-white rounded-full uppercase cursor-pointer hover:border-[#C084FC] hover:text-[#C084FC]">
        <Link
          to="/travelers"
          className="text-2xl sm:text-[3.5vw] leading-5 sm:leading-[3.5vw] pt-1.5 sm:pt-2 pb-0.5 sm:pb-0"
        >
          Travelers
        </Link>
      </div>
    </div>
  );
};

export default HomeBottom;
