import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Blog = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center p:4 py-32 gap-4 ">
        <div className="rounded-xl overflow-hidden w-8/12 flex flex-col justify-center items-center gap-8">
          <div className="rounded-xl overflow-hidden w-full h-full">
            <img
              src="https://blogscdn.thehut.net/wp-content/uploads/sites/2/2018/08/23135751/lengthening-mascara.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col ">
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight text-gray-900"
              style={{ fontFamily: "Versina", fontWeight: "bold" }}
            >
              The Ultimate Guide to Finding the Perfect Mascara for Your Lashes
            </h1>
            <div className="flex items-center text-lg text-gray-600 my-4">
              <span className="mr-2">By</span>
              <span className="font-semibold text-gray-800 hover:text-purple-600 transition duration-300 ease-in-out cursor-pointer">
                Kiki
              </span>
              <span className="mx-2">|</span>
              <time dateTime="2024-01-01" className="text-gray-500">
                January 1, 2024
              </time>
            </div>

            <div className="text-lg text-gray-600 my-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget
              sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut
              purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget
              sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut
              purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget
              sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut
              purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget
              sapien. <br /> <br /> <br /> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut
              purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget
              sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut
              purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget
              sapien. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut
              purus eget sapien. Sed ut purus eget sapien.
              <br /> <br />
              <div className="flex justify-center">
                <img
                  src="https://mindbodygreen-res.cloudinary.com/image/upload/w_480,q_auto,f_auto,fl_lossy/org/5vhh8g0imkjys81nh.png"
                  alt="Different types of mascara"
                  className="rounded-lg mb-6"
                />
              </div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Versina", fontWeight: "bold" }}
              >
                Types of Mascara:
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Volumizing mascara</li>
                <li>Lengthening mascara</li>
                <li>Curling mascara</li>
                <li>Waterproof mascara</li>
                <li>Fiber mascara</li>
              </ul>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Versina", fontWeight: "bold" }}
              >
                How to Choose the Right Mascara:
              </h2>
              <ol className="list-decimal list-inside space-y-2 mb-6">
                <li>Consider your lash type (short, long, thin, thick)</li>
                <li>Determine your desired effect (volume, length, curl)</li>
                <li>Think about your lifestyle (active, need waterproof)</li>
                <li>Check the brush shape and size</li>
                <li>Read reviews and ask for recommendations</li>
              </ol>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Versina", fontWeight: "bold" }}
              >
                Application Tips:
              </h2>
              <p className="mb-4">
                Applying mascara correctly can make a huge difference in your
                final look. Here are some tips to help you achieve the best
                results:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Curl your lashes before applying mascara</li>
                <li>
                  Start at the base of your lashes and wiggle the wand as you
                  move upward
                </li>
                <li>Apply multiple thin coats instead of one thick coat</li>
                <li>Use the tip of the wand for hard-to-reach lashes</li>
                <li>Allow each coat to dry before applying the next</li>
              </ul>
              <div className="flex justify-center mb-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7_yI_0BrlYRCFVdkonM07AO658TxGHL6JQ&s"
                  alt="Mascara application technique"
                  className="rounded-lg"
                />
              </div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Versina", fontWeight: "bold" }}
              >
                Caring for Your Mascara:
              </h2>
              <p className="mb-4">
                To ensure your mascara stays fresh and effective, follow these
                care tips:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Replace your mascara every 3-6 months</li>
                <li>
                  Don't pump the wand in and out of the tube (this introduces
                  air and can dry out the product)
                </li>
                <li>Store in a cool, dry place</li>
                <li>Never share your mascara with others</li>
                <li>
                  Remove mascara gently at the end of the day with a good makeup
                  remover
                </li>
              </ul>
              <p className="mb-4">
                Remember, finding the perfect mascara might take some trial and
                error. Don't be afraid to experiment with different brands and
                types until you find the one that makes your lashes look their
                best!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
