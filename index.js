
let homeScoreEl = document.getElementById("homeScore-el")
let guestScoreEl = document.getElementById("guestScore-el")
let homeScore = 0
let guestScore = 0

function plus(incr, side) {
    if (side == 1) {
        homeScore += incr
        homeScoreEl.textContent = homeScore
        } else {
        guestScore += incr
        guestScoreEl.textContent = guestScore
        }
    console.log(homeScore + " " + guestScore)    
}

function newgame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    console.log(homeScore + " " + guestScore)    
}
