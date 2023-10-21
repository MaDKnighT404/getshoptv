import { useState } from "react";
import { isFormValid } from "../../../../../helpers";
import { validateNumber } from "../../../../../helpers/api";

const useFormSubmit = (
  phoneValue: string,
  isChecked: boolean,
  setIsSuccessFormSubmit: (value: boolean) => void,
) => {
  const [invalidphoneValue, setInvalidphoneValue] = useState<string>("");
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
  };

  return { handleSubmit, invalidphoneValue, modalIsOpen, setModalIsOpen };
};
export default useFormSubmit;
