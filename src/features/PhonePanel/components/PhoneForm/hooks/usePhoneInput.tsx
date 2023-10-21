import { useState } from "react";

const usePhoneInput = (initialValue: string) => {
  const [phoneValue, setPhoneValue] = useState<string>(initialValue);

  const handleNumberClick = (number: string) => {
    //Находим в строке первый символ "_" и меняем его на переданную цифру
    const newPhoneValue = phoneValue.replace("_", number);
    setPhoneValue(newPhoneValue);
  };

  const handleDeleteClick = () => {
    //Считаем все символы "_"
    const underscoreCount = (phoneValue.match(/_/g) || []).length;
    // В случае если их меньше чем 10, то не удаляем последнее число (7) в строке с номером телефона
    if (underscoreCount < 10) {
      const newPhoneValue = phoneValue.replace(/(.*?)[0-9](?=[^0-9]*$)/, "$1_");
      setPhoneValue(newPhoneValue);
    }
  };

  return { phoneValue, setPhoneValue, handleNumberClick, handleDeleteClick };
};

export default usePhoneInput;
