import { ADD_SOURCE } from '../constants/actionTypes'

export const inventoryLabels = (state={},action) => {
  let labels = {
    "Gold": ["1 Emami","1 Old Azadi", "1/2 Azadi", "1/4 Azadi"],
    "Currency": ["US Dollar", "Euro","British Pound","Canadian Dollar"],
    "Crypto":["BitCoin"],
    "others": []
  };

  if(!Object.keys(state).length){
    return {...state,...labels}
  }
  
  switch(action.type){
    case ADD_SOURCE:
      
      return {...state,"others":[...state.others,action.payload.newSourceName]}
    default:
      return state
  }
};

export const labelTranslations = (state={},action) => {
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
    // "stock":"بورس"
  };

  if(!Object.keys(state).length){
    return {...state,...translations}
  }

  switch(action.type){
    case ADD_SOURCE:
      const newSource = action.payload.newSourceName
      
      return {...state,[newSource]:newSource}
    default: 
      return state
  }
};
