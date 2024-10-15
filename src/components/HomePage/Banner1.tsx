import Banner1Img from "../../assets/Banner 1.svg";

interface Props {
  bannerUrl: string;
}
const Banner1: React.FC<Props> = ({ bannerUrl }) => {
  return (
    <div className="w-full h-auto flex justify-center items-center rounded-t-[50px] overflow-hidden">
      <a href={bannerUrl}>
        <img src={Banner1Img} alt="" />
      </a>
    </div>
  );
};

export default Banner1;
