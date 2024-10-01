import LightNavLogo from "../assets/kiki_nav_light.png";
const LightNavBar = () => {
  return (
    <div className="fixed flex flex-row justify-between w-full">
      <div className="flex flex-col m-8">
        <img src={LightNavLogo} alt="" />
        <nav className="flex flex-col w-full">
          <a href="" className="font-bold text-[#440204] my-2">
            Bestseller
          </a>
          <a href="" className="font-bold text-[#440204] my-2">
            Shop By Category
          </a>
          <a href="" className="font-bold text-[#440204] my-2">
            Find Your Shade
          </a>
          <a href="" className="font-bold text-[#440204] my-2">
            Blogs
          </a>
        </nav>
      </div>
      <div className="m-8">
        <button className="bg-[#440204] text-[#F9E7DA] text-xl font-bold py-3 px-8 rounded-2xl m-4 mt-12">
          Our Story
        </button>
        <button className="bg-[#440204] text-[#F9E7DA] text-xl font-bold py-3 px-8 rounded-2xl m-4 mt-12">
          Our Ingredients
        </button>
      </div>
    </div>
  );
};

export default LightNavBar;
