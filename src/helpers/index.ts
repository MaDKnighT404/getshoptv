// Функция для определения, является ли поле полностью заполненным
export const isPhoneFullyFilled = (value: string) => {
  return value.replace(/\D/g, "").length === 11; // 11 цифр для российского номера телефона
};
