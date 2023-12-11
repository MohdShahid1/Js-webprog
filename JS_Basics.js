var btn = document.querySelector("button")
var icon2 = document.querySelector("#icon_2 i");
check=0

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
    if (check==0) {
        icon2.style.color = 'red';
        check=1;
        
            icon.style.transform= "translate(-50%,-50%) scale(4)";
            icon.style.opacity= 0.9;
        
            setTimeout(function() {
                icon.style.opacity= 0;
            }, 1000);
        
            setTimeout(function() {
                icon.style.transform= "translate(-50%,-50%) scale(4)";
            }, 2000);
       
        
    } else {
        icon2.style.color = 'green';
        check=0;
    }

        

});


icon2.addEventListener("click", function () {
    if (check==0) {
        icon2.style.color = 'red';
        check=1;
        
        icon.style.transform= "translate(-50%,-50%) scale(4)";
        icon.style.opacity= 0.9;
        
        setTimeout(function() {
            icon.style.opacity= 0;
        }, 1000);
        
        setTimeout(function() {
            icon.style.transform= "translate(-50%,-50%) scale(4)";
        }, 2000);
       
        
    } else {
        icon2.style.color = 'green';
        check=0;
    }

});



var pnl= document.querySelector("#panel")
var csr= document.querySelector(".cursor")

csr.style.backgroundcolor="red";
pnl.addEventListener("mousemove",function(dets){
    console.log("ho")
    csr.style.left=dets.x+"px";
    csr.style.top=dets.y+"px";
})



var elem=document.querySelectorAll(".elem")

elem.forEach(function (val) {
    val.addEventListener("mouseenter",function(){
    console.log("enter")
    val.childNodes[3].style.opacity=1;

});

val.addEventListener("mouseleave",function(){
    console.log("left")
    val.childNodes[3].style.opacity=0;
    
});
val.addEventListener("mousemove",function(dets){
    console.log("move")
    val.childNodes[3].style.left=dets.x+"px";
    val.childNodes[3].style.top=dets.y+"px";
});
});