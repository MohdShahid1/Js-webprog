var arr =[{
    dp:"https://images.unsplash.com/photo-1682685796852-aa311b46f50d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMTZ8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1701453831008-ea11046da960?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1701198067264-0d9b607bd399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"

},
{
    dp:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1701198067264-0d9b607bd399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D"
},
{
    dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1701347080826-9b9998692035?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp:"https://plus.unsplash.com/premium_photo-1701108112619-47c02968edbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1701109693556-4a9e58618ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D"
},]

var stories=document.querySelector("#stories")
var full_sc=document.querySelector("#full_sc")

var clutter =""
arr.forEach(function(elem,idx) {
    console.log(elem,idx)
    clutter +=`<div class="storyin">
    <img id="${idx}" src="${elem.dp}" alt="">
    </div>`;

    
});
stories.innerHTML=clutter
stories.addEventListener('click',function (dets) {
    full_sc.style.display="block"
    full_sc.style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    
    setTimeout(function () {
        full_sc.style.display="none"
        
        
        
    }, 3000);
})