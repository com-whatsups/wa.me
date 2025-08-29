let timer = 10;
const countdown = document.getElementById('timer');
const adsterraLink = "https://www.effectivecpmrate.com/ji133660?key=0868c0542426da7d87a0884de9a08f04";
const interval = setInterval(() => {
    timer--;
    countdown.textContent = timer;
    if (timer <= 0) {
        clearInterval(interval);
        redirectNow();
    }
}, 1000);

function redirectNow() {
    window.location.href = adsterraLink;
}
