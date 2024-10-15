import "./App.css";
import Lander from "./components/HomePage/Lander";
import Hero from "./components/HomePage/Hero";
import DarkNavBar from "./components/DarkNavBar";
import OurDna from "./components/HomePage/OurDna";
import Banner1 from "./components/HomePage/Banner1";
import ProductSection from "./components/HomePage/ProductSection";
function App() {
  return (
    <>
      {/* <Lander /> */}
      <div className="site-container bg-black w-full h-full">
        <DarkNavBar />
        <Hero />
        <OurDna />
        <Banner1 bannerUrl="#" />
        <ProductSection />
      </div>
    </>
  );
}
export default App;
