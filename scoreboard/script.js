const homeButton = document.querySelectorAll('.home_btn')
const guestBtn = document.querySelectorAll('.guest_btn')
const homeScoreText = document.querySelector('.home_score')
const guestScoreText = document.querySelector('.guest_score')
const homeLead = document.querySelector('.home_lead')
const guestLead = document.querySelector('.guest_lead')
const resetBtn = document.querySelector('.reset_button')
const shotClockText = document.querySelector(".shotclock")
const shotClockViolation = document.querySelector('.shotclock_violation')

let shotClock = 24;
let homeScore = 0;
let guestScore = 0;


homeButton.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const target = parseInt(e.target.dataset.id);

        homeScore += target;
        homeScoreText.textContent = homeScore
        leading()
    })
})

guestBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const target = parseInt(e.target.dataset.id);

        guestScore += target;
        guestScoreText.textContent = guestScore
        leading() 
    })
})


function leading() {
   if(homeScore > guestScore) {
        homeLead.classList.add("lead_show")
        guestLead.classList.remove("lead_show")
   } else if (guestScore > homeScore) {
    guestLead.classList.add("lead_show")
    homeLead.classList.remove("lead_show")
   } else {
    homeLead.classList.remove("lead_show")
    guestLead.classList.remove("lead_show")
   }
}

resetBtn.addEventListener('click', () => {
    homeScore = 0;
    guestScore = 0;
    guestScoreText.textContent = guestScore;
    homeScoreText.textContent = homeScore
    shotClock = 24;
    shotClockText.textContent = 0;
    homeLead.classList.remove("lead_show")
    guestLead.classList.remove("lead_show")
})

function shotClockTimer() {
    shotClock--
    shotClockText.textContent = shotClock

    if (shotClock === 0) {
        shotClock = 24;
        shotClockText.textContent = shotClock
        shotClockViolation.classList.add("shotclock_violation_show")
    } else {
        shotClockViolation.classList.remove("shotclock_violation_show")
    }


}

setInterval(shotClockTimer, 1000)