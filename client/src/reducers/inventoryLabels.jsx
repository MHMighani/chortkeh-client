export const inventoryLabels = () => {
  const labels = {
    "Gold": ["1 Emami","1 Old Azadi", "1/2 Azadi", "1/4 Azadi"],
    "Currency": ["US Dollar", "Euro","British Pound","Canadian Dollar"],
    "Crypto":["BitCoin"],
    "others": ["stock"]
  };

  return labels;
};

export const labelTranslations = () => {
  const translations = {
    "Gold":"سکه",
    "1 Emami":"تمام سکه",
    "1 Old Azadi":"تمام سکه طرح قدیم",
    "1/2 Azadi":"نیم سکه",
    "1/4 Azadi":"ربع سکه",
    "Currency":"ارز",
    "US Dollar":"دلار آمریکا",
    "Euro":"یورو",
    "British Pound":"پوند انگلیس",
    "Canadian Dollar":"دلار کانادا",
    "Crypto":"ارز دیجیتال",
    "BitCoin":"بیت کوین",
    "others":"دیگر منابع",
    "stock":"بورس"
  };

  return translations;
};
