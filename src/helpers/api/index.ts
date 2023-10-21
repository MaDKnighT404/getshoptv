const ENV_CONST = "cbbaaf481679afdb22b704c300b0ca05"; // Нужно перенести в .env. Но для тестового задания оставил тут

export const validateNumber = async (value: string) => {
  const phoneNumber = value.replace(/\D/g, "");
  const url = `http://apilayer.net/api/validate?access_key=${ENV_CONST}&number=${phoneNumber}&country_code=&format=1`;
  const response = await fetch(url);
  const data = await response.json();
  return data.valid;
};
