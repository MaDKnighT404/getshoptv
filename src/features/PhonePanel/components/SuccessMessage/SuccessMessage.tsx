const SuccessMessage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-4xl">ЗАЯВКА ПРИНЯТА</h2>
      <p className="text-md">
        Держите телефон под рукой.<br />
        Скоро с Вами свяжется наш менеджер.
      </p>
    </div>
  );
};

export default SuccessMessage;
