import InputMask from "react-input-mask";
import { useId, useState } from "react";
import { UiButton } from "../../components/Ui/UiButton";
import { useNavigate } from "react-router-dom";
import { isPhoneFullyFilled } from "../../helpers";
import { validateNumber } from "../../helpers/api";

const PhonePanel = ({
  setModalIsOpen,
}: {
  setModalIsOpen: (value: boolean) => void;
}) => {
  const [phoneValue, setPhoneValue] = useState("");
  const id = useId();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const isValid = await validateNumber(phoneValue);
    if (isValid) {
      navigate("/final");
    } else {
      setModalIsOpen(true);
    }
  };

  return (
    <div className="fixed left-0 top-0 flex h-full w-[380px] flex-col items-center gap-3 bg-blue-200 px-12 py-10 text-center">
      <h2 className="text-2xl">Введите ваш номер мобильного телефона</h2>

      <InputMask
        mask="+7(999)999-99-99"
        placeholder="+7(___)___-__-__"
        value={phoneValue}
        onChange={(e) => setPhoneValue(e.target.value)}
        className="w-full bg-transparent font-mono text-3xl font-bold placeholder-black outline-none"
      />

      <p className="text-sm">
        и с Вами свяжется наш менеждер для дальнейшей консультации
      </p>
      <div></div>
      <div className="relative flex w-full">
        <input
          className="border-1 peer h-10 w-10 shrink-0 appearance-none self-center border-2 border-black"
          id={id}
          type="checkbox"
        />
        <label
          className="absolute z-20 cursor-pointer select-none pl-14 text-left text-sm text-gray-700"
          htmlFor={id}
        >
          Согласие на обработку персональных данных
        </label>
        <svg
          className="absolute ml-1.5 mt-1.5 hidden h-7 w-7 peer-checked:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <UiButton
        disabled={!isPhoneFullyFilled(phoneValue)}
        className="mt-2 h-10 w-full border border-gray-700 text-gray-700"
        onClick={handleButtonClick}
      >
        ПОДТВЕРДИТЬ НОМЕР
      </UiButton>
    </div>
  );
};

export default PhonePanel;
