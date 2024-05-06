export const findContrastColor = (backgroundColor: string) => {
  const rgb = hexToRgb(backgroundColor);
  if (!rgb) return "#000000";
  const brightness = rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114;
  return brightness > 186 ? "black" : "white";
};

export const isContrastColorWhite = (backgroundColor: string) => {
  return findContrastColor(backgroundColor) === "white";
};

export const hexToRgb = (hex: string) => {
  return {
    r: parseInt(hex.substring(1, 3), 16),
    g: parseInt(hex.substring(3, 5), 16),
    b: parseInt(hex.substring(5, 7), 16),
  };
};
