import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PhonePanel } from "../features/PhonePanel";
import { Watermark } from "../components/Watermark";
import { Modal } from "../components/Modal";
import { UiButton } from "../components/Ui/UiButton";
import { arrowNavigation } from "../helpers";
import backgroundImage from "/images/background.webp";

const PhonePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  const handleKeyDownNavigation = (e: KeyboardEvent) => {
    arrowNavigation(e);
  };
  return (
    <div onKeyDown={handleKeyDownNavigation}>
      <img
        src={backgroundImage}
        className="fixed inset-0 h-full w-full object-cover"
      />
      <PhonePanel setModalIsOpen={setModalIsOpen} />
      <Watermark />
      {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
      <UiButton
        variant="cancel"
        className="fixed right-2 top-2 z-30"
        onClick={handleButtonClick}
        type="button"
      >
        X
      </UiButton>
    </div>
  );
};

export default PhonePage;
