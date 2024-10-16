import React from "react";
import LogoBG from "../../assets/Logo background.png";

const Hero: React.FC = () => {
  const logoBGStyle: {
    backgroundImage: string;
    backgroundSize: string;
    backgroundRepeat: string;
    backgroundPosition: string;
  } = {
    backgroundImage: `url(${LogoBG})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="hidden md:flex items-center justify-center h-screen">
      <div
        className="text-[100px] text-nowrap md:text-[200px] p-32 text-white italic font-bold  "
        style={logoBGStyle}
      >
        Kiki Beauty
      </div>
    </div>
  );
};

export default Hero;
