import { useState } from "react";
import { PhonePanel } from "../features/PhonePanel";
import { Watermark } from "../components/Watermark";
import backgroundImage from "/images/background.webp";
import Modal from "../components/Modal/Modal";

const PhonePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <img
        src={backgroundImage}
        className="fixed inset-0 h-full w-full object-cover"
      />
      <PhonePanel setModalIsOpen={setModalIsOpen} />
      <Watermark />
      {modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}
    </div>
  );
};

export default PhonePage;
