let times = document.getElementsByClassName('time-label')
let events = document.getElementsByClassName('event-label')
let place = document.getElementsByClassName('place-label')
let a;
let play = 1;

function time_change(){
    let time_min = 0;
    let time_max = 0;
    let cur_time = 0;
    let check = 0;
    
    for (let i = 0; i<times.length; i++) {
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        // hours = 10
        // minutes = 0
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
        
        h1min = time1_hours * 60 + time1_minutes;
        h2min = time2_hours * 60 + time2_minutes;
        if(time_min == 0)
            time_min = h1min
        else if(h1min < time_min)
            time_min = h1min

        if(h2min > time_max)
            time_max = h2min
            
        hmin = hours * 60 + minutes;
        cur_time = hmin;
        if (hmin >= h1min && hmin <= h2min){
            
                times[i].style.backgroundColor = '#185698';
                events[i].style.backgroundColor = '#185698';
                place[i].style.backgroundColor = '#185698'
                times[i].style.color = 'white';
                events[i].style.color = 'white';
                place[i].style.color = 'white'
                events[i].style.fontWeight = 'bold';
                place[i].style.fontWeight = 'bold';
                check += 1;
                continue
            
        }
        
        times[i].style.backgroundColor = 'transparent';
        events[i].style.backgroundColor = 'transparent';  
        place[i].style.backgroundColor = 'transparent';
        times[i].style.color = 'black';
        events[i].style.color = 'black';  
        place[i].style.color = 'black';
        events[i].style.fontWeight = 'normal';
        place[i].style.fontWeight = 'normal';         
    }

    if(check == 0 &&  time_min - cur_time > 5){
        let elem = document.getElementById("video_source");
        //elem.src = "videos/Заставка _01.mp4"
        play = 1
        elem = document.getElementById("gedsamolesan");
        elem.style.opacity = '1'
    }
    else if(check == 0 &&  cur_time - time_max > 5){
        let elem = document.getElementById("video_source");
        //elem.src = "videos/Заставка _01.mp4"
        play = 1
        elem = document.getElementById("gedsamolesan");
        elem.style.opacity = '1'
    }
    else if(check != 0){
        let elem = document.getElementById("video_source");
        //elem.src = ""
        elem = document.getElementById("gedsamolesan");
        elem.style.opacity = '0'
        play = 0;
    }
}   
time_change()
let timerId = setInterval(time_change, 1000);