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
    let day = (now.getDate()).toString();
    if(day.length == 1)
        day = '0' + day
    let month = (now.getMonth()).toString();
    if(month.length == 1)
        month = '0' + month    
    let str = day + '.' + month + '.' + now.getFullYear() + 'г' + '.';
    let day_name = now.getDay();
    str += '(' + days[day_name] + ')'
    let elem = document.getElementsByClassName("day-container");
    elem[0].innerHTML = str;
    console.log(str)
}
update_day()


let timerDays = setInterval(update_day, 5000);

