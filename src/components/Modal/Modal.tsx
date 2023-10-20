import { MouseEvent, useEffect } from "react";

const Modal = ({
  setModalIsOpen,
}: {
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
      <div className="relative flex h-full md:max-h-[220px] max-h-[190px] w-full max-w-[300px] flex-col items-center rounded border border-gray-700 bg-white px-5 py-10 text-center shadow">
        <button
          onClick={() => setModalIsOpen(false)}
          className="absolute right-2 top-2 cursor-pointer text-xl md:text-3xl "
        >
          X
        </button>
        <div className="absolute left-0 top-0 h-full w-4 bg-red-600" />
        <h2 className="justify-start text-xl md:text-3xl">Ошибка!</h2>
        <h3 className="text-md mt-5 md:text-xl">
          Извините, но кажется вы ошиблись в своём номере телефона
        </h3>
      </div>
    </div>
  );
};

export default Modal;
