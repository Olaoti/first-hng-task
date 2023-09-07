days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
date = new Date
today =date.getDay()
document.querySelector('.day-of-the-week').innerHTML = days[today]
document.querySelector('.UTC-time').innerHTML = Date.now()