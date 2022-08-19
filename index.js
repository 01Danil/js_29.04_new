const calcSummaTwoNamberReqAtUser = function () {
  const number = prompt("Укажите Ваш год рождения", "");
  const thisYear = 2022;
  //ошибка: если ничего не ввели (пустая строка) либо нажали отмена, либо ввели что-то, что не цифры
  if (number === "" || number === null || isNaN(Number(number))) {
    //true
    //обработка ошибки
    return "error";
  } else {
    //false
    let summa = Number(thisYear) - Number(number);
    return summa;
  }
};

let summa = calcSummaTwoNamberReqAtUser();
alert(`Ваш возраст ${summa} лет!`);
