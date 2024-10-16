import Logo from "../assets/kiki-beauty-white.png";
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-8 flex justify-between md:flex-row flex-col md:gap-0 gap-10 items-center">
      {/* Left Column: Logo */}
      <div>
        <img src={Logo} className="h-40 w-auto" alt="" />
      </div>

      {/* Middle Column: Links */}
      <div>
        <div className="flex flex-row gap-8 md:gap-16">
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg mb-2">Shop</h3>
            <a href="#" className="hover:underline transition-all">
              Foundation
            </a>
            <a href="#" className="hover:underline transition-all">
              Lipstick
            </a>
            <a href="#" className="hover:underline transition-all">
              Eyeshadow
            </a>
            <a href="#" className="hover:underline transition-all">
              Concealer
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-lg mb-2">About</h3>
            <a href="#" className="hover:underline transition-all">
              Our Story
            </a>
            <a href="#" className="hover:underline transition-all">
              Ingredients
            </a>
            <a href="#" className="hover:underline transition-all">
              Blog
            </a>
            <a href="#" className="hover:underline transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Copyright */}
      <div>
        <address className="text-sm mb-4">
          <p className="font-semibold">Kiki Beauty Headquarters</p>
          <p>123 Beauty Lane</p>
          <p>Cannaught Place, New Delhi, 110011</p>
          <p>INDIA</p>
        </address>

        <p>&copy; 2024 Kiki Beauty</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
