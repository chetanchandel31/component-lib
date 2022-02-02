export const getPixelStringFromNumber = (val: string | number | undefined) =>
  typeof val === "number" ? `${val}px` : val;
