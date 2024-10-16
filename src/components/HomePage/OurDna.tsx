import React from "react";
import Portrait from "../../assets/Image effect.png";
import Portrait2 from "../../assets/portrait2.jpeg";

const OurDna: React.FC = () => {
  return (
    <div className="mt-8 md:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-40 py-10 md:py-20 text-white ">
        <div className="p-4 md:p-16">
          <h1 className="text-4xl font-bold text-center">In Our Dna</h1>
          <p
            className="mt-8 text-center text-xl md:text-2xl "
            style={{ fontFamily: "Versina", fontWeight: "bold" }}
          >
            Growing up, you heard it all:{" "}
            <span
              style={{
                fontFamily: "Versinal",
                fontWeight: 100,
                fontStyle: "italic",
              }}
            >
              "You'd be beautiful if you were fairer,"
            </span>{" "}
            or{" "}
            <span
              style={{
                fontFamily: "Versinal",
                fontWeight: 100,
                fontStyle: "italic",
              }}
            >
              "She's pretty, but dark."
            </span>{" "}
            You spent years masking your rich, beautiful skin, hiding behind
            lighter shades, trying to fit a mold that was never made for you.
            But those days are over.
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
          <p
            style={{
              fontFamily: "Versinal",
              fontWeight: "bold",
            }}
          >
            Kiki isn't just makeup—it's a rebellion.{" "}
            <span
              style={{
                fontSize: "2.5rem",
              }}
            >
              A love letter to every dusky girl
            </span>{" "}
            who's been overlooked or treated as an afterthought by the beauty
            industry.
          </p>
        </div>
      </div>

      <div
        className="p-4 text-center text-2xl text-white md:px-40 md:py-10 mb-16"
        style={{
          fontFamily: "Versinal",
          fontWeight: "bold",
        }}
      >
        Kiki is for the{" "}
        <span className="text-4xl">
          dusky, the daring, and the f**king ravishing
        </span>
        . For the queens who are done hiding and ready to own their shade. We're
        not here to blend in; we're here to stand out.
      </div>
    </div>
  );
};

export default OurDna;
