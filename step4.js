
    function getRandomIntFromRange(min, max) {
        min = Math.ceil(min); // вычисляет и возвращает наименьшее целое число, которое больше или равно переданному числу (округляет число вверх)
        max = Math.floor(max); // вычисляет и возвращает наибольшее целое число, которое меньше или равно переданному числу (округляет число вниз)
        return Math.floor(Math.random() * (max - min)) + min; 
      }
      alert(getRandomIntFromRange(0,100));
  