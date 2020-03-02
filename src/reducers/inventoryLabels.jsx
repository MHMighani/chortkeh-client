export const inventoryLabels = () => {
  const labels = {
    "سکه": ["تمام سکه", "نیم سکه", "ربع سکه"],
    "ارز": ["دلار آمریکا", "یورو"],
    "دیگر منابع": ["بورس"]
  };

  return labels;
};

export const labelTranslations = () => {
  const translations = {
    "سکه":"Gold",
    "تمام سکه":"1 Emami",
    "نیم سکه":"1/2 Azadi",
    "ربع سکه":"1/4 Azadi",
    "ارز":"Currency",
    "دلار آمریکا":"US Dollar",
    "یورو":"Euro",
    "دیگر منابع":"others",
    "بورس":"stock"
  };

  return translations;
};
