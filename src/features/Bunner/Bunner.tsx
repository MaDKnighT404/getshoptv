import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UiButton } from "../../components/Ui/UiButton";
import QRImage from "/images/QR.png";

const Bunner = () => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsShow(true), 5000);
    return () => clearTimeout(timer); // очистка таймера при unmount'e компонента
  }, []);

  const handleButtonClick = () => {
    navigate("/phone");
  };

  return (
    <div
      className={`transition-translate fixed bottom-5 right-5 z-10 flex w-full max-w-[250px] flex-col items-center justify-center gap-5 bg-blue-300 pb-2.5 pt-5 text-center duration-500 ease-in ${
        isShow ? "translate-x-0" : "translate-x-[300px]"
      }`}
    >
      <p className="px-3 font-bold">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ ГРУЗОВИК!
        <span className="block text-sm">(а лучше два!)</span>
      </p>
      <img
        width={100}
        height={100}
        src={QRImage}
        alt="QR"
      />
      <p className="w-[130px] text-sm">Сканируйте QR-код или нажмите ОК</p>
      <UiButton
        variant="primary"
        className="w-[150px] text-xl bg-black p-2 text-blue-300"
        onClick={handleButtonClick}
      >
        OK
      </UiButton>
    </div>
  );
};

export default Bunner;
