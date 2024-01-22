import "./App.css";
import InfoCard from "./InfoCard";

const Home = () => {
  return (
    <>
      <div className="flex p-4 space-x-4">
        <div className="flex p-4 space-x-4">
          <InfoCard
            imageSrc="https://png.pngtree.com/png-vector/20220903/ourmid/pngtree-shining-bright-light-bulb-png-image_6136095.png"
            text="Bulb"
            to="/NextPage" // Add the correct route
          />
          <InfoCard
            imageSrc="https://cdn-icons-png.flaticon.com/512/8009/8009118.png"
            text="AC"
            to="/NextPage" // Add the correct route
          />
        </div>
      </div>

      <div className="flex p-4 space-x-4">
        <InfoCard
          imageSrc="https://cdn-icons-png.freepik.com/512/1023/1023521.png?ga=GA1.1.525317044.1705401784&"
          text="TV"
        />
        <InfoCard
          imageSrc="https://cdn-icons-png.freepik.com/512/2338/2338045.png?ga=GA1.1.525317044.1705401784&"
          text="Fan"
        />
      </div>
      <div className="flex p-4 space-x-4">
        <InfoCard
          imageSrc="https://cdn-icons-png.freepik.com/512/2098/2098169.png?ga=GA1.1.525317044.1705401784&"
          text="Refrigerator"
        />
        <InfoCard
          imageSrc="https://cdn-icons-png.freepik.com/512/3466/3466858.png?ga=GA1.1.525317044.1705401784&"
          text="Washing machine"
        />
      </div>
    </>
  );
};

export default Home;
