import { Watermark } from "../components/Watermark";
import backgroundImage from "/images/background.webp";

const PhonePage = () => {
  return (
    <div>
      <img
        src={backgroundImage}
        className="fixed inset-0 h-full w-full object-cover"
      />
      <Watermark />
    </div>
  );
};

export default PhonePage;
