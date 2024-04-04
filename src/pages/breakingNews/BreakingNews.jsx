import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex items-center">
      <button class="btn btn-outline btn-success">Success</button>
      <Marquee pauseOnHover={true} speed={100}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
