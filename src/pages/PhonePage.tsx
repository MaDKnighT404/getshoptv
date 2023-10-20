import { useState } from "react";
import { PhonePanel } from "../features/PhonePanel";
import { Watermark } from "../components/Watermark";
import backgroundImage from "/images/background.webp";
import Modal from "../components/Modal/Modal";
import { UiButton } from "../components/Ui/UiButton";
import { useNavigate } from "react-router-dom";

const PhonePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div>
      <img
        src={backgroundImage}
        className="fixed inset-0 h-full w-full object-cover"
      />
      <PhonePanel setModalIsOpen={setModalIsOpen} />
      <Watermark />
      <UiButton
        className="fixed right-2 top-2 z-30 rounded-sm bg-white w-[88px] h-[52px] text-2xl text-black border-2 border-black"
        onClick={handleButtonClick}
      >
        X
      </UiButton>
      {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
    </div>
  );
};

export default PhonePage;
