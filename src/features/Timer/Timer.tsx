import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const [seconds, setSeconds] = useState(12);
  const navigate = useNavigate();

  useEffect(() => {
    const resetTimer = () => {
      setSeconds(12);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          return 12; // сбрасываем таймер обратно на 12 секунд
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

  useEffect(() => {
    if (seconds === 0) {
      navigate("/");
    }
  }, [seconds, navigate]);

  if (seconds > 9) return null; // не показываем таймер пока больше 9 секунд

  return (
    <div className="fixed left-2 top-2 z-50 flex rounded-xl bg-slate-50 px-2 py-1 ">
      {seconds}с до возврата на главную...
    </div>
  );
};

export default Timer;
