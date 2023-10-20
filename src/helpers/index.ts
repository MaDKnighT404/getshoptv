export const isFormValid = (
  phoneValue: string,
  isChecked: boolean,
): boolean => {
  const isValidPhone = phoneValue.replace(/\D/g, "").length === 11;
  return isValidPhone && isChecked;
};
