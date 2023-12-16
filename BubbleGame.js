function bubblemake() {
    var clutter = "";

    for (i = 0; i <= 132; i++) {
        var mt = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${mt}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

var rn = 0;
function hitval() {
    rn = Math.floor(Math.random() * 10)
    document.querySelector("#hiit").textContent = rn;

}

var timer = 60;
function timerval() {
    var timint = setInterval(function () {
        if (timer > 0) {
            timer--
            document.querySelector("#time").textContent = timer;

        } else {
            clearInterval(timint)
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`

        }

    }, 1000);

}

var score = 0;
function scoreval() {
    score += 10;
    document.querySelector("#sco").textContent = score;

}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (rn == clickednum) {
        scoreval()
        bubblemake()
        hitval()


    }
})



bubblemake()
hitval()
timerval()
scoreval()

