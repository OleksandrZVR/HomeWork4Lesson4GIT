//let price = +prompt('Введите цену');
//
//if(price <= 100){
//    console.log('Это дешево');
//} else{
//    console.log("Это дорого")
//}



//
//let price = +prompt('Введите цену');
//
//price <= 100 ? console.log('Это дешево') : console.log("Это дорого");


let login = prompt('Введите логин');

if (login === 'Админ') {
    let password = prompt('Введите пароль');
    if (password === 'admin') {
        alert('Добро пожаловать!');
    } else if (password === null) {
        alert('Вход отменен');
    } else {
        alert('пароль неверен');
    }
} else if (login === null) {
    alert('Вход отменен');
} else {
    alert('Я Вас не знаю');
}
