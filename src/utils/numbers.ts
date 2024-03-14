export const convertLocalFloatIntoNumber = (numberToConvert: number): number => {
  return +numberToConvert.toString().replace(/,/g, ".");
};

export const convertFloatIntoLocal = (numberToConvert: number): string => {
  return numberToConvert.toString().replace(/\./g, ",");
};
