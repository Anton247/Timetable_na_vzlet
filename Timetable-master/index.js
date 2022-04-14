function TimeCard(props){
    return (
            /*#__PURE__*/React.createElement("div", {className: "time-container"},
            [...Array(Object.keys(props.tablet).length)].map((n, i) => /*#__PURE__*/React.createElement('div', {className: "time", key: i},
            React.createElement('span', {className: "time-label"}, Object.keys(props.tablet)[i]))))
        )
}

function EventCard(props){
    return (
            /*#__PURE__*/React.createElement("div", {className: "event-container"},
            [...Array(Object.keys(props.tablet).length)].map((n, i) => /*#__PURE__*/React.createElement('div', {className: "event", key: i},
            React.createElement('span', {className: "event-label"}, Object.values(props.tablet)[i]))))
        )
}

table = {
    '11:00-12:30': 'Регистрация',
    '12:30-13:00': 'Отдых',
    '13:00-14:00': 'Обед',
    '14:00-18:00': 'Практика',
    '18:00-21:20': 'Ужин и прогулка',
    '21:20-22:30': 'Рефлексия',
}

const app = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TimeCard, {
        tablet: table
    }), /*#__PURE__*/React.createElement(EventCard, {
        tablet: table
    })
);

ReactDOM.render(app, document.getElementsByClassName('time-event-container')[0]);
