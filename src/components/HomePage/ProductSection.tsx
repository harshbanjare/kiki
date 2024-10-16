import bgImage from "../../assets/Rectangle 21.png";
import ProductCard from "../ProductCard";

const ProductSection = () => {
  const bgStyle: {
    backgroundImage: string;
    backgroundSize: string;
    backgroundRepeat: string;
    backgroundPosition: string;
  } = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div
      className="w-full h-auto min-h-[400px] p-16 flex justify-center items-center flex-col gap-16"
      style={bgStyle}
    >
      <h1 className="text-[#F8F0DF] md:text-4xl text-2xl font-bold text-nowrap">
        GET IT BEFORE IT’S GONE
      </h1>
      <div className="flex justify-center items-center gap-16 md:flex-row flex-col">
        <ProductCard url="/kiki/shop" />
        <ProductCard url="/kiki/shop" />
      </div>
    </div>
  );
};

export default ProductSection;
