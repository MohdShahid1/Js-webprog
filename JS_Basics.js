var btn = document.querySelector("button")

var flag = 0
btn.addEventListener("click", function () {
    if (flag == 0) {

        btn.innerHTML = "Following"
        console.log("following")
        flag = 1
    }
    else {
        btn.innerHTML = "Follow"
        flag = 0
    }
})

var icon = document.querySelector("i");
var pan = document.querySelector("img");

pan.addEventListener("dblclick", function () {
    icon.style.transform= "translate(-50%,-50%) scale(4)";
    icon.style.opacity= 0.9;

    setTimeout(function() {
        icon.style.opacity= 0;
    }, 1000);

    setTimeout(function() {
        icon.style.transform= "translate(-50%,-50%) scale(4)";
    }, 2000);
});

var icon2 = document.querySelector("#icon_2 i");

icon2.addEventListener("click", function () {
    icon2.style.color = 'red';
});



