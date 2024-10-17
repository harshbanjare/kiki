const BlogSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-white text-4xl font-bold my-10">Blogs</h1>
      <div className="bg-blue grid md:grid-cols-8 grid-cols-1 gap-4 w-full md:p-16">
        <div className="bg-gray-900  rounded-lg md:col-span-5 flex md:flex-row flex-col justify-start ">
          <img
            src="https://www.bobbibrown.in/media/export/cms/products/responsive/bb_sku_H819Y4_1x1_0.png?width=768&height=768"
            alt=""
            className="h-64 w-auto rounded-lg"
          />
          <div className="flex flex-col justify-center items-start px-10">
            <h1 className="text-white text-3xl font-bold ">
              Top 10 Foundations for Dusky Skin Tones: Enhance Your Natural Glow
            </h1>
            <p className="text-white text-xl py-2">
              Discover the best foundations that perfectly match and enhance
              dusky skin tones, providing flawless coverage and a radiant
              finish. From drugstore to high-end options, find your perfect
              shade. <br />
              <a href="/blog">
                <span className="text-white text-xl underline">Read More</span>
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="bg-gray-800  rounded-lg md:col-span-3 flex md:flex-row flex-col justify-start overflow-hidden p-4">
          <img
            src="https://www.bobbibrown.in/media/export/cms/GNAV/Redesign_2022/Lip/Navigation-Lipstick_2x-1280x1280.png"
            alt=""
            className="h-64 w-auto rounded-lg"
          />
          <div className="flex flex-col justify-center items-start px-10 py-2">
            <h1 className="text-white text-3xl font-bold py-2">
              Must-Have Lipsticks for Dusky Skin: Bold, Beautiful, and
              Long-Lasting
            </h1>
            <a href="/blog">
              <span className="text-white text-xl underline">Read More</span>
            </a>{" "}
          </div>
        </div>
        <div className="bg-gray-800  rounded-lg md:col-span-3 flex md:flex-row flex-col justify-start overflow-hidden p-4">
          <img
            src="https://www.bobbibrown.in/media/export/cms/GNAV/Redesign_2022/Eye/Navigation-EyeShadow_2x-1280x1280.png"
            alt=""
            className="h-64 w-auto rounded-lg"
          />
          <div className="flex flex-col justify-center items-start px-10 py-2">
            <h1 className="text-white text-3xl font-bold py-2">
              Eyeshadows for Dusky Skin: Bold, Neutral, and Everything In
              Between
            </h1>
            <a href="/blog">
              <span className="text-white text-xl underline">Read More</span>
            </a>{" "}
          </div>
        </div>

        <div className="bg-gray-900  rounded-lg md:col-span-5 flex md:flex-row flex-col justify-start ">
          <img
            src="https://www.bobbibrown.in/media/export/cms/products/responsive/bb_sku_EWY508_1x1_0.png?width=768&height=768"
            alt=""
            className="h-64 w-auto rounded-lg"
          />
          <div className="flex flex-col justify-center items-start px-10">
            <h1 className="text-white text-3xl font-bold ">
              Best Concealers for Dusky Skin: Full Coverage Without Ashiness
            </h1>
            <p className="text-white text-xl py-2">
              Say goodbye to ashiness and discover the top concealers that
              provide full coverage for dusky skin tones. Learn how to find the
              right shade to cover dark spots and under-eye circles. <br />
              <a href="/blog">
                <span className="text-white text-xl underline">Read More</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
