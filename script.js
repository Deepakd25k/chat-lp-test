// Countdown timer for 2 days
const timerEl = document.getElementById('timer');
let countdown = 48 * 60 * 60; // seconds
function updateTimer() {
    const hours = String(Math.floor(countdown / 3600)).padStart(2,'0');
    const minutes = String(Math.floor((countdown % 3600) / 60)).padStart(2,'0');
    const seconds = String(countdown % 60).padStart(2,'0');
    timerEl.textContent = `${hours}:${minutes}:${seconds}`;
    if(countdown > 0) countdown--;
}
setInterval(updateTimer, 1000);
updateTimer();

// Random purchase popup
const purchasePop = document.getElementById('purchasePop');
const purchaseText = document.getElementById('purchaseText');
const names = ['Anjali','Rahul','Priya','Sandeep','Vikas'];
function showPurchase(){
    const name = names[Math.floor(Math.random()*names.length)];
    purchaseText.textContent = `${name} just enrolled!`;
    purchasePop.style.opacity = 1;
    setTimeout(()=>{ purchasePop.style.opacity = 0; }, 5000);
}
setInterval(showPurchase, 15000);
