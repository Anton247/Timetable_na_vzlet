let times = document.getElementsByClassName('time-label')
let events = document.getElementsByClassName('event-label')
let a;

function time_change(){
    for (let i = 0; i<times.length; i++) {
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
    
        // console.log(hours)
        // console.log(minutes)
    
        a = times[i].textContent.split('-');
    
        let time1 = a[0];
        let time2 = a[1];
    
        // console.log('time1', time1)
        // console.log("time2", time2)
    
        let time1_hours = parseInt(time1.split(':')[0]);
        let time1_minutes = parseInt(time1.split(':')[1]); 
        let time2_hours = parseInt(time2.split(':')[0]);
        let time2_minutes = parseInt(time2.split(':')[1]);
    
        // console.log("time1_hours", time1_hours)
        // console.log("time1_minutes", time1_minutes)
        // console.log("time2_hours", time2_hours)
        // console.log("time2_minutes", time2_minutes)
    
        if ((hours >= time1_hours && hours <= time2_hours)){
            if (hours == time1_hours && hours == time2_hours){
                if (minutes >= time1_minutes){
                    if (minutes <= time2_minutes) {
    
                    } else { continue }
                } else { continue }
            } else if (hours == time2_hours) {
                if (minutes <= time2_minutes) {
    
                } else { continue }
            }
            for (let j = 0; j<times.length; j++) {
                times[j].style.backgroundColor = 'white';
                events[j].style.backgroundColor = 'white';    
            }
            times[i].style.backgroundColor = 'cyan';
            events[i].style.backgroundColor = 'cyan';

            break
        }
    }
}   
time_change()
let timerId = setInterval(time_change, 1000);