import { KeyboardEvent } from "react";

export const isFormValid = (
  phoneValue: string,
  isChecked: boolean,
): boolean => {
  const isValidPhone = phoneValue.replace(/\D/g, "").length === 11;
  return isValidPhone && isChecked;
};

export const arrowNavigation = (e: KeyboardEvent) => {
  // Получаем все элементы, по которым можно перемещаться
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(
      "button:not([disabled]), input[type='checkbox']",
    ),
  );

  // Текущий элемент, на котором установлен фокус
  const currentFocused = document.activeElement;

  if (!currentFocused) return;

  // Индекс текущего элемента
  const currentIndex = elements.indexOf(currentFocused as HTMLElement);

  if (currentIndex === -1) return;

  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    // Если нажата стрелка вправо или вниз, устанавливаем фокус на следующий элемент
    const nextIndex = (currentIndex + 1) % elements.length;
    elements[nextIndex].focus();
    e.preventDefault();
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    // Если нажата стрелка влево или вверх, устанавливаем фокус на предыдущий элемент
    const prevIndex = (currentIndex - 1 + elements.length) % elements.length;
    elements[prevIndex].focus();
    e.preventDefault();
  }
};
