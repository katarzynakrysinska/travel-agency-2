export const dateToStr = function(dateObj){
  return dateObj.toISOString().slice(0, 10);
};

export const addDays = function(dateStr, days){
  const dateObj = new Date(dateStr);
  dateObj.setDate(dateObj.getDate() + days);
  return dateObj;
};