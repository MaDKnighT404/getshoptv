import { KeyboardEvent } from "react";
import InputMask from "react-input-mask";
import { NumbersBlock } from "./components/NumbersBlock";
import { UiButton } from "../../../../components/Ui/UiButton";
import { Checkbox } from "./components/Checkbox";
import { Modal } from "../../../../components/Modal";
import usePhoneInput from "./hooks/usePhoneInput";
import useFormSubmit from "./hooks/useFormSubmit";
import { isFormValid } from "../../../../helpers";

const PhoneForm = ({
  setIsSuccessFormSubmit,
}: {
  setIsSuccessFormSubmit: (value: boolean) => void;
}) => {
  //Кастомные хуки
  const { phoneValue, setPhoneValue, handleNumberClick, handleDeleteClick } =
    usePhoneInput("+7(___)___-__-__");

  const {
    handleSubmit,
    isChecked,
    setIsChecked,
    invalidphoneValue,
    modalIsOpen,
    setModalIsOpen,
  } = useFormSubmit({ phoneValue, setPhoneValue, setIsSuccessFormSubmit });

  const handleKeyDownType = (e: KeyboardEvent) => {
    if (e.key >= "0" && e.key <= "9") {
      handleNumberClick(e.key);
    }

    if (e.key === "Backspace") {
      handleDeleteClick();
    }

    if (e.key === "Enter") {
      e.preventDefault();
      // Получить активный элемент (в фокусе)
      const activeElement = document.activeElement as HTMLElement;
      if (activeElement) {
        activeElement.click();
      }
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
          className="mt-4 w-full py-2 text-white"
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
