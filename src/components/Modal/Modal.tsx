import { MouseEvent, useEffect } from "react";
import { UiButton } from "../Ui/UiButton";

const Modal = ({
  value,
  setModalIsOpen,
}: {
  value: string;
  setModalIsOpen: (value: boolean) => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setModalIsOpen]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setModalIsOpen(false);
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/50 px-4"
    >
      <div className="relative flex h-full max-h-[170px] w-full max-w-[300px] flex-col items-center gap-3 rounded border border-gray-700 bg-white px-5 py-10 text-center shadow md:max-h-[200px]">
        <UiButton
          variant="cancel"
          onClick={() => setModalIsOpen(false)}
          className="absolute right-2 top-2 cursor-pointer text-xl"
        >
          X
        </UiButton>
        <div className="absolute left-0 top-0 h-full w-4 bg-red-600" />
        <h2 className="justify-start text-xl md:text-3xl">Ошибка!</h2>
        <h3 className="text-md md:text-xl">Не верно введен номер телефона.</h3>
        <h4 className="text-mdtext-red-500 md:text-xl">{value}</h4>
      </div>
    </div>
  );
};

export default Modal;
