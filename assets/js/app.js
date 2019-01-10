$(document).ready(function() {
    const secondHand = document.querySelector(".second-hand");

    setDate = () => {
        // take the current Date which includes hour, minutes, and seconds - data to be used in animation
        const now = new Date();

        // get each second and define it as it will be used
        const seconds = now.getSeconds();

        // each second will be used to get the exact position of it in the clock 
        const secondsDegrees = ((seconds / 60) * 360);
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        
        console.log(seconds)

    }

    setInterval(setDate, 1000)
})

