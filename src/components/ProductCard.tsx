import { FaArrowRightLong } from "react-icons/fa6";

import productImage from "../assets/product1.png";

const ProductCard = ({ url }: { url: string }) => {
  const cardImgStyle: {
    backgroundImage: string;
    backgroundSize: string;
    backgroundRepeat: string;
    backgroundPosition: string;
  } = {
    backgroundImage: `url(${productImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div className="w-[350px] bg-[#F8F0DF] rounded-2xl p-2 flex justify-center items-center flex-col gap-2">
      <div
        className="w-full h-[400px] bg-blue-950 rounded-2xl flex justify-end items-stretch flex-col text-white p-4"
        style={cardImgStyle}
      >
        <div className="flex justify-center items-center gap-2">
          <a href="" className="flex-1">
            <div
              className="p-2 rounded-2xl flex"
              style={{ backgroundColor: "rgba(228, 170, 129, 0.4)" }}
            >
              <div className="flex-1 font-bold">Buy Now</div>
              <div className="flex-initial flex justify-center items-center bg-[#544E4E] p-1 px-2 rounded-2xl">
                <FaArrowRightLong />
              </div>
            </div>
          </a>
          <div
            className="flex-initial p-2 rounded-2xl font-bold"
            style={{ backgroundColor: "rgba(228, 170, 129, 0.4)" }}
          >
            200$
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] bg-[#716860] rounded-2xl flex justify-center items-start p-2 flex-col">
        <div className="font-bold text-white text-xl">
          Natural Finish Foundation
        </div>
        <div className="flex text-[12px] justify-start  gap-2">
          <div className="flex-initial text-white">
            Weightless, smudge-proof, buildable coverage
          </div>
          <a href={url}>
            <div className="flex-initial text-nowrap font-bold underline text-white">
              Read More
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
