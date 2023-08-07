const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6
        
    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000)

    /*==================== CLOCK & DATE TEXT ====================*/
const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-min'),
      textAmPm = document.getElementById('text-ampm'),

      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

      const clockText = () =>{
        let date = new Date()
    
        let hh = date.getHours(),
            ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()

      // 24 hour to 12 hour
    if(hh >= 12){
       hh = hh - 12
       ampm = 'PM'
    }else{
       ampm = 'AM'
    }

     // We detect when it's 0 AM and transform to 12 AM
    if(hh == 0){
       hh = 12
    }
    // Show a zero before hours
    if(hh < 10){hh = `0${hh}`}

    textHour.innerHTML = `${hh}:`

    if(mm < 10){mm = `0${mm}`}

   // show minutes am or pm
   textMinutes.innerHTML = mm  
   textAmPm.innerHTML = ampm

    // We get the months of the year and show it
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    // show the day, the month and the year
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]}`
    dateYear.innerHTML = year
}
setInterval(clockText, 1000)