// function TimeCard(props){
//     return (
//             /*#__PURE__*/React.createElement("div", {className: "time-container"},
//             [...Array(Object.keys(props.tablet).length)].map((n, i) => /*#__PURE__*/React.createElement('div', {className: "time", key: i},
//             React.createElement('span', {className: "time-label"}, Object.keys(props.tablet)[i]))))
//         )
// }

// function EventCard(props){
//     return (
//             /*#__PURE__*/React.createElement("div", {className: "event-container"},
//             [...Array(Object.keys(props.tablet).length)].map((n, i) => /*#__PURE__*/React.createElement('div', {className: "event", key: i},
//             React.createElement('span', {className: "event-label"}, Object.values(props.tablet)[i]))))
//         )
// }


timetable = {

    '2': {
        '10:00-10:30': ['Регистрация', 'Ресепшен детского технопарка «Кванториум»'],
        '10:30-11:00': ['Церемония открытия Хакатона', 'Лекторий'],
        '11:00-13:00': ['Работа над кейсом', 'Площадки проведений трека'],
        '13:00-14:00': ['Технический перерыв', '    '],
        '14:00-17:00': ['Работа над кейсом', 'Площадки проведения треков'],
        '15:30-17:00': ['Check – point 1', 'Площадки проведения треков'],   
    },
    
    '3':{
        '9:50-10:00': ['Брифинг', 'Лекторий'],
        '10:00-13:00': ['Работа над кейсом', 'Площадки проведений трека'],
        '11:00-11:30': ['МК «Структурные основы успешной презентации»', 'Лекторий'],
        '11:30-13:00': ['Check – point 2', 'Площадки проведения треков'],
        '13:00-14:00': ['Технический перерыв', ' '],
        '14:00-17:00': ['Работа над кейсом', 'Площадки проведения треков'],
        '15:00-16:00': ['МК «Основные методы и приёмы для успешного выступления»', 'Лекторий'], 
    },

    '4':{
        '9:50-10:00': ['Брифинг', 'Лекторий'],
        '10:00-11:30': ['Защита проектов', 'Площадки проведений трека'],
        '11:30-12:30': ['Технический перерыв', ' '],
        '12:30-13:00': ['Церемония закрытия Хакатона', 'Лекторий'], 
    }
    
}

// const app = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TimeCard, {
//         tablet: table
//     }), /*#__PURE__*/React.createElement(EventCard, {
//         tablet: table
//     })
// );

//ReactDOM.render(app, document.getElementsByClassName('time-event-container')[0]);



function add_event(){
    let table = document.getElementById('main_body')
    
    let now = new Date();
    let day = now.getDay();
    str = ""
    for(let key in timetable[day]){
        str = ""
        let el = document.createElement('tr')
        time = key;
        event_v = timetable[day][key][0]
        place = timetable[day][key][1]
        str += "<td>" + '<div class="time-label">' + time + '</div>' + "</td> <td>" + '<div class="event-label">' + event_v + "</div>" +"</td> <td>" + '<div class="place-label">' + place + "</div>"+"</td>"  //table[key][0]
        el.innerHTML =str 
        table.append(el);
    }
}

let time_event_container = document.getElementsByClassName('time-event-container')
//time_container(time_event_container[0])
//event_container(time_event_container[0])
//place_container(time_event_container[0])
add_event()
let now = new Date()
let prevDay = now.getDay();

function update_timetable(){
    let time_event_container = document.getElementsByClassName('time-event-container')
    let curDay = new Date().getDay();
    if(curDay != prevDay){
        //time_container(time_event_container[0])
        //event_container(time_event_container[0])
        //place_container(time_event_container[0])
        location.reload()
        add_event()
    }
}

setInterval(update_timetable, 1000);



