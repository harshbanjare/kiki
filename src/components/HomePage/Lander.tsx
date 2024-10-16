import LogoMain from "../../assets/kiki_light_1.png";
import LightNavBar from "../LightNavBar";

import img1 from "../../assets/landing/img1.png";
import img2 from "../../assets/landing/img2.png";
import img3 from "../../assets/landing/img3.png";

const Lander = () => {
  const bgStyle: {
    backgroundImage: string;
    backgroundSize: string;
    backgroundRepeat: string;
    backgroundPosition: string;
    backgroundAttachment: string;
    zIndex: number;
  } = {
    backgroundImage: `url(${LogoMain})`,
    backgroundSize: "fit",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    zIndex: 100,
  };
  return (
    <div
      className="bg-[#F9E7DA] h-screen w-screen fixed z-[1000]"
      style={bgStyle}
    >
      <LightNavBar Lander={true} />

      <div className="flex flex-row w-full justify-between absolute bottom-0 m-8">
        <h1 className="flex text-3xl w-[22rem] font-bold items-end">
          For the dusky daring and f*cking ravishing.
        </h1>
        <div className="flex flex-row gap-4 mr-20">
          <img src={img1} className="h-48" alt="" />
          <img src={img2} className="h-48" alt="" />
          <img src={img3} className="h-48" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Lander;
