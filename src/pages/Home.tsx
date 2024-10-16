import Hero from "../components/HomePage/Hero";
import DarkNavBar from "../components/DarkNavBar";
import OurDna from "../components/HomePage/OurDna";
import Banner from "../components/Banner";
import ProductSection from "../components/HomePage/ProductSection";
import Showcase from "../components/HomePage/Showcase";
import BlogSection from "../components/HomePage/BlogSection";
import Footer from "../components/Footer";
import Banner1Img from "../assets/Banner 1.svg";
import Banner3Img from "../assets/Banner 3 (Option 2).svg";
import findMyShade from "../assets/Find My Shade.svg";
// import Lander from "../components/HomePage/Lander";s

const Home = () => {
  return (
    <>
      {/* {<Lander />} */}
      <div className="flex flex-col site-container bg-black w-full h-full">
        <DarkNavBar />
        <Hero />
        <OurDna />
        <Banner bannerUrl="#" bannerImg={Banner1Img} />
        <ProductSection />
        <Showcase />
        <Banner bannerUrl="#" bannerImg={findMyShade} rounded />
        <Banner bannerUrl="#" bannerImg={Banner3Img} />
        <BlogSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
