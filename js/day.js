let days = {
    
    '0': 'ВОСКРЕСЕНЬЕ',
    '1': 'ПОНЕДЕЛЬНИК',
    '2': 'ВТОРНИК',
    '3': 'СРЕДА',
    '4': 'ЧЕТВЕРГ',
    '5': 'ПЯТНИЦА',
    '6': 'СУББОТА'
}

function update_day(){
    let now = new Date();
    let str = now.getDate() + '.' + now.getMonth() + '.' + now.getFullYear() + 'г' + '.';
    let day = now.getDay();
    str += '(' + days[day] + ')'
    let elem = document.getElementsByClassName("day-container");
    elem[0].innerHTML = str;
    console.log(str)
}
update_day()


let timerDays = setInterval(update_day, 5000);

