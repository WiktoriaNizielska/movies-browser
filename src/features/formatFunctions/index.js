export const formatCountries = (countries) => {
  return countries.map((country) => country.name).join(", ");
};