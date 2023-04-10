export const getDateNow = (number) =>{
  const date = new Date()
  const monthNames = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ];
  return `${date.getDate()}-${monthNames[date.getMonth()]}-${date.getFullYear()}`;
}