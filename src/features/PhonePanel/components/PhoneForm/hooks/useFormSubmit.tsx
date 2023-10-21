import { useState, FormEvent } from "react";
import { isFormValid } from "../../../../../helpers";
import { validateNumber } from "../../../../../helpers/api";

const useFormSubmit = ({
  phoneValue,
  setPhoneValue,
  setIsSuccessFormSubmit,
}: {
  phoneValue: string;
  setPhoneValue: (value: string) => void;
  setIsSuccessFormSubmit: (value: boolean) => void;
}) => {
  const [invalidphoneValue, setInvalidphoneValue] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
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

  return {
    handleSubmit,
    invalidphoneValue,
    modalIsOpen,
    setModalIsOpen,
    isChecked,
    setIsChecked,
  };
};
export default useFormSubmit;
