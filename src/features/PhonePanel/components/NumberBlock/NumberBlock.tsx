import { Dispatch, SetStateAction } from "react";
import { UiButton } from "../../../../components/Ui/UiButton";

const NumberBlock = ({
  phoneValue,
  setPhoneValue,
}: {
  phoneValue: string;
  setPhoneValue: Dispatch<SetStateAction<string>>;
}) => {
  const handleNumberClick = (number: string) => {
    // заменяем первую "_" на переданную цифру
    const newPhoneValue = phoneValue.replace("_", number);
    setPhoneValue(newPhoneValue);
  };

  const handleDeleteClick = () => {
    // Находим последнюю цифру в маске и заменяем её на "_"
    const newPhoneValue = phoneValue.replace(/(.*?)[0-9](?=[^0-9]*$)/, "$1_");
    setPhoneValue(newPhoneValue);
  };

  return (
    <div className="grid w-full grid-cols-3 gap-4 py-7">
      {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((number) => (
        <UiButton
          variant="secondary"
          key={number}
          className="px-6 py-3"
          onClick={() => handleNumberClick(number)}
          type="button"
        >
          {number}
        </UiButton>
      ))}
      <UiButton
        variant="secondary"
        className="col-span-2 px-6 py-3"
        onClick={handleDeleteClick}
        type="button"
      >
        Стереть
      </UiButton>
      <UiButton
        variant="secondary"
        className="px-6 py-3"
        onClick={() => handleNumberClick("0")}
        type="button"
      >
        0
      </UiButton>
    </div>
  );
};

export default NumberBlock;
