import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import productImage from "../assets/product1.png";
const Product = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col md:flex-row justify-center gap-5 my-48">
        <div className="flex flex-col justify-ce items-center">
          <img src={productImage} className="md:h-[650px] " alt="Product" />
        </div>
        <div className="md:w-1/2 flex flex-col items-start justify-start gap-4 p-12 md:p-0">
          <div className="text-6xl">Product Name</div>
          <div className="text-md ">
            Discover a weightless, smudge-proof foundation that blends
            seamlessly with your skin for a flawless, natural finish. Enriched
            with nourishing ingredients, this formula provides long-lasting
            coverage while hydrating and protecting your skin. Additional
            Information: Suitable for all skin types. Cruelty-free and vegan.
            Non-comedogenic. Contains SPF 20 for sun protection. Available in a
            range of shades to match your skin.
          </div>

          <div className="opacity-50 text-md italic text-right w-full">
            Try Free Sample, Now! Limited Time Offer.
          </div>

          <div className="flex flex-row  w-full gap-4">
            <div className="text-xl">$19.99</div>
            <div className="opacity-50 line-through">$29.99</div>
            <div className="text-md ml-auto text-right">Save 33%</div>
          </div>

          <div className="flex flex-row items-center w-full gap-4 mt-4">
            <div className="text-lg font-semibold">Quantity:</div>
            <div className="flex flex-row gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  className="w-10 h-10 text-lg font-medium border border-gray-300 rounded-full hover:bg-[#440204] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#440204]"
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6 w-full">
            <button
              onClick={() => {
                alert("Coming soon!");
              }}
              className="flex-1 bg-[#440204] text-white text-xl font-bold py-4 px-8 rounded-sm hover:bg-[#5a0306] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#440204] focus:ring-opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Buy Now
            </button>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white text-[#440204] text-xl font-bold py-4 px-8 rounded-sm border-2 border-[#440204] hover:bg-[#440204] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#440204] focus:ring-opacity-50 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Try Free Sample
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
