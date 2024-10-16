import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
const Shop = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center my-32 gap-4">
        <div className="text-4xl font-bold">Discover Our Products</div>
        <div className="w-full max-w-md">
          {/* <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#440204] focus:border-transparent"
          /> */}
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap gap-8 my-8">
          <ProductCard url="/kiki/product" />
          <ProductCard url="/kiki/product" />
          <ProductCard url="/kiki/product" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
