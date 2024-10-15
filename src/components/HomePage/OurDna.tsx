import React from "react";
import Portrait from "../../assets/Image effect.png";
import Portrait2 from "../../assets/portrait2.jpeg";

const OurDna: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-40 py-10 md:py-20 text-white">
        <div className="p-4 md:p-16">
          <h1 className="text-4xl font-bold text-center">In Our Dna</h1>
          <p className="mt-8 text-center text-xl md:text-2xl">
            Growing up, you heard it all: "You'd be beautiful if you were
            fairer," or "She's pretty, but dark." You spent years masking your
            rich, beautiful skin, hiding behind lighter shades, trying to fit a
            mold that was never made for you. But those days are over.
          </p>
        </div>
        <div className="hidden md:flex p-4 flex-row gap-8 items-center">
          <img
            src={Portrait}
            alt="Portrait 1"
            className="max-h-[200px] object-cover"
          />
          <img
            src={Portrait2}
            alt="Portrait 2"
            className="max-h-[200px] object-cover"
          />
          <img
            src={Portrait2}
            alt="Portrait 3"
            className="max-h-[200px] object-cover"
          />
        </div>
        <div className="hidden md:flex p-4 flex-row gap-8 items-center justify-center">
          <img
            src={Portrait}
            alt="Portrait 1"
            className="max-h-[200px] object-cover"
          />
          <img
            src={Portrait}
            alt="Portrait 1"
            className="max-h-[200px] object-cover"
          />
        </div>
        <div className="p-4 text-center text-xl md:text-2xl">
          <p>
            Kiki isn't just makeup—it's a rebellion. A love letter to every
            dusky girl who's been overlooked or treated as an afterthought by
            the beauty industry.
          </p>
        </div>
      </div>

      <div className="p-4 text-center text-2xl text-white px-40 py-10">
        Kiki is for the dusky, the daring, and the f* *king ravishing. For the
        queens who are done hiding and ready to own their shade. We're not here
        to blend in; we're here to stand out.
      </div>
    </div>
  );
};

export default OurDna;
