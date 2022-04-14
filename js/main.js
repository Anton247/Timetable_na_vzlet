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

function clock() {// We create a new Date object and assign it to a variable called "time".
    var time = new Date(),
        
        // Access the "getHours" method on the Date object with the dot accessor.
        hours = time.getHours(),
        
        // Access the "getMinutes" method with the dot accessor.
        minutes = time.getMinutes(),
        
        
        seconds = time.getSeconds();
    
    document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
      
      function harold(standIn) {
        if (standIn < 10) {
          standIn = '0' + standIn
        }
        return standIn;
      }
    }


setInterval(clock, 1000);

let timerDays = setInterval(update_day, 5000);

