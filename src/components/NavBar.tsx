import DarkNavLogo from "../assets/kik_light_logo.png";
const NavBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between p-2 text-white z-50 items-center md:p-8">
      <div className="flex flex-col justify-center items-center">
        <a href="/">
          <img src={DarkNavLogo} className="h-16 md:ml-4" alt="" />
        </a>
      </div>
      <div className="flex flex-row md:mr-8">
        <button className="bg-[#440204] text-white md:text-xl text-xs font-bold py-3 px-8 rounded-[50px] m-2 text-nowrap">
          Our Story
        </button>
        <button className="bg-[#440204] text-white md:text-xl text-xs font-bold py-3 px-8 rounded-[50px] m-2 text-nowrap">
          Our Ingredients
        </button>
      </div>
    </div>
  );
};

export default NavBar;
