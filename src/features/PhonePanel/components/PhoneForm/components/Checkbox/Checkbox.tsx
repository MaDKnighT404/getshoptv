import { ChangeEvent, useId } from "react";

const Checkbox = ({
  isChecked,
  setIsChecked,
}: {
  isChecked: boolean;
  setIsChecked: (val: boolean) => void;
}) => {
  const id = useId();
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="relative flex w-full items-center">
      <input
        autoFocus
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
  );
};

export default Checkbox;
