import InputMask from "react-input-mask";
import { ChangeEvent, useId, useState } from "react";
import { UiButton } from "../../components/Ui/UiButton";
import { useNavigate } from "react-router-dom";
import { isFormValid } from "../../helpers";
import { validateNumber } from "../../helpers/api";
import NumberBlock from "./components/NumberBlock/NumberBlock";

const PhonePanel = ({
  setModalIsOpen,
}: {
  setModalIsOpen: (value: boolean) => void;
}) => {
  const [phoneValue, setPhoneValue] = useState<string>("+7(___)___-__-__");
  const [isChecked, setIsChecked] = useState(false);
  const id = useId();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid(phoneValue, isChecked)) {
      return;
    }

    const isValid = await validateNumber(phoneValue);
    if (isValid) {
      navigate("/final");
    } else {
      setModalIsOpen(true);
    }
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="fixed left-0 top-0 z-10 h-full w-[380px] bg-blue-200  py-10 ">
      <form
        className="flex flex-col items-center gap-2 px-10 text-center"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl">Введите ваш номер мобильного телефона</h2>

        <InputMask
          mask="+7(999)999-99-99"
          placeholder="+7(___)___-__-__"
          value={phoneValue}
          onChange={(e) => setPhoneValue(e.target.value)}
          className="w-full bg-transparent px-4 font-mono text-3xl font-bold placeholder-black outline-none"
        />

        <p className="text-sm">
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </p>
        <NumberBlock
          phoneValue={phoneValue}
          setPhoneValue={setPhoneValue}
        />
        <div className="relative flex w-full items-center">
          <input
            className="border-1 peer h-8 w-8 shrink-0 appearance-none self-center border-2 border-black"
            id={id}
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            className="absolute z-20 cursor-pointer select-none pl-14 text-left text-sm text-gray-700"
            htmlFor={id}
          >
            Согласие на обработку персональных данных
          </label>
          <svg
            className="absolute ml-1.5 hidden h-5 w-5 peer-checked:block"
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
          variant="primary"
          disabled={!isFormValid(phoneValue, isChecked)}
          className="mt-2 w-full py-2 text-gray-700"
          type="submit"
          onSubmit={handleSubmit}
        >
          ПОДТВЕРДИТЬ НОМЕР
        </UiButton>
      </form>
    </div>
  );
};

export default PhonePanel;
