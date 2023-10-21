import { useState } from "react";

const usePhoneInput = (initialValue: string) => {
  const [phoneValue, setPhoneValue] = useState<string>(initialValue);

  const handleNumberClick = (number: string) => {
    const newPhoneValue = phoneValue.replace("_", number);
    setPhoneValue(newPhoneValue);
  };

  const handleDeleteClick = () => {
    const underscoreCount = (phoneValue.match(/_/g) || []).length;
    if (underscoreCount < 10) {
      const newPhoneValue = phoneValue.replace(/(.*?)[0-9](?=[^0-9]*$)/, "$1_");
      setPhoneValue(newPhoneValue);
    }
  };

  return { phoneValue, setPhoneValue, handleNumberClick, handleDeleteClick };
};

export default usePhoneInput;
