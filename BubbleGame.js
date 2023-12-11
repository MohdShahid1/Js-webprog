    var clutter = "";

    for (i = 0; i <= 132; i++) {
        var mt = Math.floor(Math.random()* 10)
        clutter += `<div class="bubble">${mt}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;

