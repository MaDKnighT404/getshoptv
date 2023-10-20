const NumberBlock = () => {
  return (
    <div className="grid grid-cols-3 gap-4 py-7">
      <button className="border-2 border-black px-8 py-3">1</button>
      <button className="border-2 border-black px-8 py-3">2</button>
      <button className="border-2 border-black px-8 py-3">3</button>

      <button className="border-2 border-black px-8 py-3">4</button>
      <button className="border-2 border-black px-8 py-3">5</button>
      <button className="border-2 border-black px-8 py-3">6</button>

      <button className="border-2 border-black px-8 py-3">7</button>
      <button className="border-2 border-black px-8 py-3">8</button>
      <button className="border-2 border-black px-8 py-3">9</button>

      <button className="col-span-2 border-2 border-black px-8 py-3">
        Стереть
      </button>
      <button className="border-2 border-black px-8 py-3">0</button>
    </div>
  );
};

export default NumberBlock;
