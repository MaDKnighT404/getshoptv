import { useState } from "react";
import { PhoneForm } from "./components/PhoneForm";
import { SuccessMessage } from "./components/SuccessMessage";

const PhonePanel = () => {
  const [isSuccessFormSubmit, setIsSuccessFormSubmit] = useState(false);
  return (
    <div className="fixed left-0 top-0 z-10 flex h-full w-[380px] flex-col items-center gap-2 bg-blue-200 p-10 text-center">
      {isSuccessFormSubmit ? (
        <SuccessMessage />
      ) : (
        <PhoneForm setIsSuccessFormSubmit={setIsSuccessFormSubmit} />
      )}
    </div>
  );
};

export default PhonePanel;
