
let gym=document.getElementById("olp");

document.addEventListener('mousemove',(e)=>
{
    // gym.setAttribute("style", "top: "+e.pageY+"px;left:"+e.pageX+"px");
    gym.style.top=`${e.pageY}px`;
    gym.style.backgroundColor="blue";
    console
})
gym.style.scale="2";