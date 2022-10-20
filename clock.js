function displayTime() {

    let dateTime = new Date()
    let hour = dateTime.getHours()
    let min = dateTime.getMinutes()
    let sec = dateTime.getSeconds()
    let session = document.getElementById('session')
    if(hour>=12){
        hour = hour - 12
        session.innerText = 'PM'

    }
    document.querySelector('#hour').innerText = hour
    document.querySelector('#min').innerText = min
    document.querySelector('#sec').innerText = sec
   

}
setInterval(displayTime, 10)