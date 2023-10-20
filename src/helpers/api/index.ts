export const validateNumber = async (value: string) => {
  const phoneNumber = value.replace(/\D/g, "");
  const url = `http://apilayer.net/api/validate?access_key=cbbaaf481679afdb22b704c300b0ca05&number=${phoneNumber}&country_code=&format=1`;
  const response = await fetch(url);
  const data = await response.json();
  return data.valid
};
