import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [seconds, setSeconds] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const resetTimer = () => {
      setSeconds(12);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          navigate("/");
          return 12; // сбрасываем таймер обратно на 10 секунд
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Очистка при размонтировании компонента
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, [navigate]);

  if (seconds > 9) return null;

  return (
    <div className="fixed left-2 top-2 z-50 flex  w-[230px] rounded-xl bg-slate-50 p-1 ">
      {seconds}с до возврата на главную
    </div>
  );
};

export default Timer;
