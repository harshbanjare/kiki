interface Props {
  bannerUrl: string;
  bannerImg: string;
  rounded?: boolean;
}
const Banner1: React.FC<Props> = ({ bannerUrl, bannerImg, rounded }) => {
  return (
    <div
      className={`w-full h-auto flex justify-center items-center  overflow-hidden ${
        rounded ? "rounded-t-[50px]" : ""
      }`}
    >
      <a href={bannerUrl}>
        <img src={bannerImg} alt="" />
      </a>
    </div>
  );
};

export default Banner1;
