import DarkNavLogo from "../assets/kiki-white.png";
const DarkNavBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between p-2 text-white z-50 items-center md:p-8">
      <div className="flex flex-col justify-center items-center">
        <img src={DarkNavLogo} className=" h-12 md:ml-4" alt="" />
      </div>
      <div className="flex flex-row md:mr-8">
        <button className="bg-[#FEEFD0] text-black md:text-xl text-xs font-bold py-3 px-8 rounded-[50px] m-2 text-nowrap">
          Our Story
        </button>
        <button className="bg-[#FEEFD0] text-black md:text-xl text-xs font-bold py-3 px-8 rounded-[50px] m-2 text-nowrap">
          Our Ingredients
        </button>
      </div>
    </div>
  );
};

export default DarkNavBar;
