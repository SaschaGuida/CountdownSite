const targetDate = new Date(2023, 9, 29, 12, 0, 0).getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} Day ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);

updateCountdown();


