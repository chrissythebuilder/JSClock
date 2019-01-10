$(document).ready(function() {

    const hourHand = document.querySelector(".hour-hand");
    const minHand = document.querySelector(".min-hand");
    const secondHand = document.querySelector(".second-hand");

    setDate = () => {
        // take the current Date which includes hour, minutes, and seconds - data to be used in animation
        const now = new Date()
        console.log(now)

        // take the seconds and define it as it will be used in following events
        const seconds = now.getSeconds();

        // each second will be used to get the exact position of it in the clock 
        const secondsDegrees = ((seconds / 60) * 360) + 90
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`

        // take the minutes and define it as it will be used in following events
        const minutes = now.getMinutes()

        const minutesDegrees = ((minutes / 60) * 360) + 90
        minHand.style.transform = `rotate(${minutesDegrees}deg)`

        // take the hour and define it as it will be used in the following events
        const hours = now.getMinutes();

        const hoursDegrees = (minutes * 360) + 90
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
        
        console.log(seconds);
        console.log(secondsDegrees);

    }

    setInterval(setDate, 1000)
})

