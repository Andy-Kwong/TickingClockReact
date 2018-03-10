var currentTime = Date.now()
const timeDisplay = React.createElement('p', null, currentTime.toLocaleTimeString('en-US'));

ReactDOM.render(timeDisplay, document.getElementById('time'));

setInterval(function() {
    ReactDOM.render(timeDisplay, document.getElementbyID('time'));
}, 100)
