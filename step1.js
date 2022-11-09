let a;
a = +prompt("Введите цифру");

if(a == 0){
    alert('Число 0');
}else if(typeof a !== 'number' || isNaN(a)){
    alert("Ошибка. Не число.");
}else{
    if(a%2 == 0){
        alert('Число '+a+' Четное');
    }else{
        alert('Число '+a+' Нечетное');
    }
}