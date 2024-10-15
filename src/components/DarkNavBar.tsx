import DarkNavLogo from "../assets/kiki-white.png";
const DarkNavBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between p-2 text-white z-50">
      <img src={DarkNavLogo} className="mt-12 h-12 ml-4" alt="" />
      <div className="flex flex-row mr-8">
        <button className="bg-[#FEEFD0] text-black text-xl font-bold py-3 px-8 rounded-[50px] m-4 mt-12">
          Our Story{" "}
        </button>
        <button className="bg-[#FEEFD0] text-black text-xl font-bold py-3 px-8 rounded-[50px] m-4 mt-12">
          Our Ingredients
        </button>
      </div>
    </div>
  );
};

export default DarkNavBar;
