export const formatCountries = (countries) => {
  return countries.map((country) => country.name).join(", ");
};

export const formatShortCountries = (countries) => {
  return countries.map((country) => country.iso_3166_1).join(", ");
};

export const formatYear = (date) => date.split("-")[0];

export const formatRate = (rate) => rate.toFixed(1).replace(".", ",");

export const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${day}.${month}.${year}`;
};