import showcase1 from "../../assets/showcase1.png";
import showcase2 from "../../assets/showcase2.gif";
const Showcase = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white md:p-8 p-2 m-4">
      <div className="flex flex-row justify-evenly w-full gap-4 ">
        <div className="md:text-xl text-sm font-bold">
          NEW Weightless Skin <br />
          Foundation
        </div>
        <div className="underline text-sm md:text-xl font-bold">Shop Now</div>
        <div className="text-sm md:text-xl font-bold">#INMYSKIN</div>
        <div className="underline md:text-xl text-sm font-bold">
          Explore More
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-evenly w-full items-center p-8 gap-4">
        <div className="md:w-[600px] w-full flex flex-col justify-start my-4">
          <img src={showcase1} alt="showcase1" className="w-full h-full" />
          <div className="flex flex-col justify-start my-2">
            <div className="text-xl font-bold my-1">
              See your best skin, not makeup
            </div>
            <div className="text-sm">
              Foundation that goes all day, feels like nothing, and has you
              covered without hiding your real beauty.
            </div>
          </div>
        </div>

        <div className="md:w-[600px] w-full flex flex-col justify-start my-4">
          <img src={showcase2} alt="showcase1" className="w-full h-full" />
          <div className="flex flex-col justify-start my-2">
            <div className="text-xl font-bold my-1">
              See your best skin, not makeup
            </div>
            <div className="text-sm">
              Foundation that goes all day, feels like nothing, and has you
              covered without hiding your real beauty.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
