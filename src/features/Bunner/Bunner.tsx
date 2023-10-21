import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UiButton } from "../../components/Ui/UiButton";
import QRImage from "/images/QR.png";

const Bunner = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //Таймер появления рекламного баннера
    const timer = setTimeout(() => setIsShow(true), 5000);
    return () => clearTimeout(timer); // очистка таймера при unmount'e компонента
  }, []);

  const handleButtonClick = () => {
    navigate("/phone");
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 z-10 my-auto flex max-h-fit max-w-[270px] flex-col items-center justify-center gap-5 bg-blue-300 pb-2.5 pt-5 text-center transition ${
        isShow ? "translate-x-0" : "translate-x-[300px]"
      }`}
    >
      <p className="px-1 font-bold leading-5">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!
        <br />
        ПОДАРИТЕ ЕМУ ГРУЗОВИК!
        <br />
        <span className="text-sm">(а лучше два!)</span>
      </p>
      <img
        width={100}
        height={100}
        src={QRImage}
        alt="QR"
      />
      <p className="px-12 text-sm">Сканируйте QR-код или нажмите ОК</p>
      <UiButton
        variant="primary"
        className="bg-black p-2 px-16 text-xl text-blue-300"
        onClick={handleButtonClick}
      >
        OK
      </UiButton>
    </div>
  );
};

export default Bunner;
