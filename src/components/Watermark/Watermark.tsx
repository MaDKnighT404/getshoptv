import QRImage from "/images/QR.png";

const Watermark = () => {
  return (
    <div className="flex w-full max-w-[320px] gap-2 fixed right-8 bottom-8">
      <p className="text-right text-md text-white leading-4 flex items-center">
        СКАНИРУЙТЕ QR-КОД ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
      </p>
      <img
        width={100}
        height={100}
        src={QRImage}
        alt="QR code"
      />
    </div>
  );
};

export default Watermark;
