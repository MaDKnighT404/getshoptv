import { UiButton } from "../../../../components/Ui/UiButton";

const NumberBlock = ({
  handleNumberClick,
  handleDeleteClick,
}: {
  handleNumberClick: (number: string) => void;
  handleDeleteClick: () => void;
}) => {
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
