import { KeyboardEvent, useState } from "react";
import InputMask from "react-input-mask";
import { NumbersBlock } from "./components/NumbersBlock";
import { UiButton } from "../../../../components/Ui/UiButton";
import { isFormValid } from "../../../../helpers";
import { validateNumber } from "../../../../helpers/api";
import { Checkbox } from "./components/Checkbox";
import { Modal } from "../../../../components/Modal";

const PhoneForm = ({
  setIsSuccessFormSubmit,
}: {
  setIsSuccessFormSubmit: (value: boolean) => void;
}) => {
  const [phoneValue, setPhoneValue] = useState<string>("+7(___)___-__-__");
  const [invalidphoneValue, setInvalidphoneValue] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid(phoneValue, isChecked)) {
      return;
    }

    const isValid = await validateNumber(phoneValue);
    if (isValid) {
      setIsSuccessFormSubmit(true);
    } else {
      setInvalidphoneValue(phoneValue);
      setModalIsOpen(true);
    }
    setPhoneValue("+7(___)___-__-__");
    setIsChecked(false);
  };

  const handleNumberClick = (number: string) => {
    // заменяем первую "_" на переданную цифру
    const newPhoneValue = phoneValue.replace("_", number);
    setPhoneValue(newPhoneValue);
  };

  const handleDeleteClick = () => {
    // Считаем количество символов "_" в текущем значении
    const underscoreCount = (phoneValue.match(/_/g) || []).length;

    // Если количество "_" равно 10, не производим замену
    if (underscoreCount < 10) {
      const newPhoneValue = phoneValue.replace(/(.*?)[0-9](?=[^0-9]*$)/, "$1_");
      setPhoneValue(newPhoneValue);
    }
  };

  const handleKeyDownType = (e: KeyboardEvent) => {
    if (e.key >= "0" && e.key <= "9") {
      handleNumberClick(e.key);
    }

    if (e.key === "Backspace") {
      handleDeleteClick();
    }

    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <>
      <form onKeyDown={handleKeyDownType}>
        <h2 className="text-2xl">Введите ваш номер мобильного телефона</h2>

        <InputMask
          mask="+7(999)999-99-99"
          placeholder="+7(___)___-__-__"
          value={phoneValue}
          onChange={(e) => {
            if (e.target.value) {
              setPhoneValue(e.target.value);
            }
          }}
          className="w-full bg-transparent px-4 font-mono text-3xl font-bold placeholder-black outline-none"
        />

        <p className="text-sm">
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </p>
        <NumbersBlock
          handleNumberClick={handleNumberClick}
          handleDeleteClick={handleDeleteClick}
        />

        <Checkbox
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />

        <UiButton
          variant="primary"
          disabled={!isFormValid(phoneValue, isChecked)}
          className="mt-4 w-full py-2 text-gray-700"
          onClick={handleSubmit}
        >
          ПОДТВЕРДИТЬ НОМЕР
        </UiButton>
      </form>
      {modalIsOpen && (
        <Modal
          setModalIsOpen={setModalIsOpen}
          value={invalidphoneValue}
        />
      )}
    </>
  );
};

export default PhoneForm;
