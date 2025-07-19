let star_naming_code=0;


setInterval(()=>{
    let no_of_stars=Math.floor(Math.random()*3);
    star_start(no_of_stars);
},500);//produce number of stars



function star_life(newDiv){
    let duration_of_star=Math.floor(Math.random()*5000+2000);
    setTimeout(()=>{
        newDiv.remove();
    },duration_of_star);
    return duration_of_star;
}//duration of each star



async function star_style(newDiv,duration_of_star){
    newDiv.classList.add("star");

    let Y_axis_position=(Math.random()*40+10);

    newDiv.style.animationDuration=`${duration_of_star+100}ms`;

    let x=0,y=0,opacity=0,timer=0,time_clock;
    time_clock=setInterval(()=>{
        movement();
    },1)

    function movement(){
        if(timer++==duration_of_star){
            clearInterval(time_clock);
        }
        else{
            if(duration_of_star<2500){
            newDiv.style.translate=(`${x++/8}vw ${Y_axis_position}vw`);
            newDiv.style.scale="0.25" ;
            }
            else if(duration_of_star>=2500 && duration_of_star<4000){
            newDiv.style.translate=(`${x++/10}vw ${Y_axis_position}vw`);
            newDiv.style.scale="0.3" ;
            }
            else if(duration_of_star>=4000 && duration_of_star< 5000){
            newDiv.style.translate=(`${x++/2}vw ${Y_axis_position}vw`);
            newDiv.style.scale="0.35" ;
            }
            else{
            newDiv.style.translate=(`${x++/14}vw ${Y_axis_position}vw`);
            newDiv.style.scale="0.2" ;
            }
        }
    }
}



function star_start(no_of_stars){
    let newDiv,star_code,duration_of_star;
    for(i=0;i<no_of_stars;i++)
    {   
        star_code=(star_naming_code++)%30;
        newDiv = document.createElement(`div`);
        newDiv.innerHTML=`<div class="aura"> </div>`;
        document.getElementById("star").parentNode.insertBefore(newDiv,document.getElementById("star").nextSibling);
        newDiv.id=star_code;
        duration_of_star=star_life(newDiv);
        star_style(newDiv,duration_of_star);    }
}//make a div star and set duration of each star






// dot Star

let dotstar_naming_code=0;
setInterval(()=>{
    let no_of_dotstars=Math.floor(Math.random()*5);
    dotstar_start(no_of_dotstars);
},150);//produce number of dotstars

function dotstar_life(newDiv){
    let duration_of_star=Math.floor(Math.random()*7000+15000);
    let newDiv_opacity=Math.round(Math.random());
    if(newDiv_opacity==0)
    newDiv.style.backgroundColor="gray";
    setTimeout(()=>{
        newDiv.remove();
    },duration_of_star);
    return duration_of_star;
}//life of dotstar


function dotstar_start(no_of_stars){
    let newDiv,dotstar_code,duration_of_dotstar;
    for(i=0;i<no_of_stars;i++)
    {   
        dotstar_code=-(star_naming_code++)%13000;
        newDiv = document.createElement(`div`);
        document.getElementById("dot-star").parentNode.insertBefore(newDiv,document.getElementById("dot-star").nextSibling);
        newDiv.id=dotstar_code;
        duration_of_dotstar=dotstar_life(newDiv);
        dotstar_style(newDiv,duration_of_dotstar);    }
}

async function dotstar_style(newDiv,duration_of_dotstar){
    newDiv.classList.add("dot-star-class");

    let X_axis_position=(Math.random()*100);
    let Y_axis_position=(Math.random()*100);
    newDiv.style.translate=(`${X_axis_position}vw ${Y_axis_position}vh`);
}

































document.getElementById("img_div_1").onmouseover=function(){
    document.getElementById("img1").style.scale="0.7"
}
document.getElementById("img_div_1").onmouseout=function(){
    document.getElementById("img1").style.scale="0.6"
}


document.getElementById("img_div_2").onmouseover=function(){
    document.getElementById("img2").style.scale="0.7"
}
document.getElementById("img_div_2").onmouseout=function(){
    document.getElementById("img2").style.scale="0.6"
}

document.getElementById("img_div_3").onmouseover=function(){
    document.getElementById("img3").style.scale="0.7"
}
document.getElementById("img_div_3").onmouseout=function(){
    document.getElementById("img3").style.scale="0.6"
}


document.getElementById("img_div_4").onmouseover=function(){
    document.getElementById("img4").style.scale="0.7"
}
document.getElementById("img_div_4").onmouseout=function(){
    document.getElementById("img4").style.scale="0.6"
}











let menu=0;

document.getElementById("menu-barr").onclick=function(){
    menu++;
    if(menu%2!=0)
    {
        document.getElementById("menu-text").innerHTML="Close";
        document.getElementById("cross-mark1").style.rotate="45deg";
        document.getElementById("cross-mark2").style.rotate="-45deg";
        document.getElementById("cross-mark1").style.translate="3.7vw -1.5vw";
        document.getElementById("cross-mark2").style.translate=" 3.7vw -1.505vw";

        document.getElementById("menu-navbar").style.translate="83vw -1vw";
        document.getElementById("menu-navbar").style.opacity="1";
        document.getElementById("menu-navbar").style.scale="1";
    }
    else
    {
        document.getElementById("menu-text").innerHTML="Menu";
        document.getElementById("cross-mark1").style.rotate="0deg";
        document.getElementById("cross-mark2").style.rotate="0deg";
        document.getElementById("cross-mark1").style.translate="3.7vw -1.7vw";
        document.getElementById("cross-mark2").style.translate="3.7vw -1.2vw";

        document.getElementById("menu-navbar").style.translate="83vw -1vw";
        document.getElementById("menu-navbar").style.opacity="0";
        document.getElementById("menu-navbar").style.scale="0.6";
        setTimeout(()=>{
            
            document.getElementById("menu-navbar").style.translate="100vw -1vw";
        },300)
    }
    
}


let ele=document.getElementById("nav-bar");

let nav_observer=new IntersectionObserver((entries)=>
{
    entries.forEach((entry)=>{
        if(entry.isIntersecting)
        {
            ele.style.translate="0vw 0vw";
            ele.style.opacity="1";
        }
            
        else
        {
            ele.style.translate="0vw 3vw";
            ele.style.opacity="0";
        }
    })
    
},{});

nav_observer.observe(ele);





let all_rights=document.querySelectorAll(".right-observer-class");
let logo1=document.getElementById("fixed-slider-1");
let logo2=document.getElementById("fixed-slider-2");
let logo3=document.getElementById("fixed-slider-3");
let logo4=document.getElementById("fixed-slider-4");

let slider_observer=new IntersectionObserver((entries)=>
{
    entries.forEach(entry=>
        {   
            if(entry.isIntersecting)
            {
                if(entry.target.id=="right1")
                {
                    logo1.style.color=("#A272CF");
                    logo2.style.color=("rgba(255, 255, 255, 0.15)");
                    logo3.style.color=("rgba(255, 255, 255, 0.15)");
                    logo4.style.color=("rgba(255, 255, 255, 0.15)");

                }
                else if(entry.target.id=="right2")
                {
                    logo1.style.color=("rgba(255, 255, 255, 0.15)");
                    logo2.style.color=("#A272CF");
                    logo3.style.color=("rgba(255, 255, 255, 0.15)");
                    logo4.style.color=("rgba(255, 255, 255, 0.15)");
                }
                else if(entry.target.id=="right3")
                {
                    logo1.style.color=("rgba(255, 255, 255, 0.15)");
                    logo2.style.color=("rgba(255, 255, 255, 0.15)");
                    logo3.style.color=("#A272CF");
                    logo4.style.color=("rgba(255, 255, 255, 0.15)");
                }
                else if(entry.target.id=="right4")
                {
                    logo1.style.color=("rgba(255, 255, 255, 0.15)");
                    logo2.style.color=("rgba(255, 255, 255, 0.15)");
                    logo3.style.color=("rgba(255, 255, 255, 0.15)");
                    logo4.style.color=("#A272CF");
                }
            }
        })
},{ threshold:0.5, });

all_rights.forEach(single_rights=>
    {
        slider_observer.observe(single_rights);
    })





let type_1=document.querySelectorAll(".observer-type-1");


let type_1_observer= new IntersectionObserver((entries)=>
{
    entries.forEach(entry=>
        {
            if(entry.isIntersecting)
            {
                if(entry.target.id=="mid-front-top")
                {
                    entry.target.style.scale= "1";
                    entry.target.style.height= "13vw";
                    entry.target.style.opacity= "1";
                    type_1_observer.unobserve(entry.target);
                }
                else if(entry.target.id=="slider-flex")
                {
                    entry.target.style.opacity="1";
                    entry.target.style.translate="0vw 32vw";
                    type_1_observer.unobserve(entry.target);
                }
                else if(entry.target.id=="leftfixed")
                {
                    entry.target.style.opacity="1";
                    entry.target.style.height= "30vw";
                    entry.target.style.translate="13.5vw 12vw";
                    type_1_observer.unobserve(entry.target);
                }
                else if(entry.target.id=="get-started")
                {   
                    document.getElementById("last-middle").style.height="32vw";
                    document.getElementById("last-middle").style.opacity="1";
                    type_1_observer.unobserve(entry.target);
                }
                else if(entry.target.id=="see-all-projects-btn")
                {
                    entry.target.style.opacity="1";
                    entry.target.style.scale="0.6";
                    entry.target.style.translate="0vw 496vw";
                    type_1_observer.unobserve(entry.target);
                }
                else if(entry.target.id=="sticky-design1")
                {
                    document.getElementById("sticky-design1").style.scale="1";
                    document.getElementById("sticky-design2").style.scale="1";
                    document.getElementById("sticky-design3").style.scale="1";
                    document.getElementById("sticky-design4").style.scale="1";
                }
                else if(entry.target.id=="sticky-design2")
                {
                    document.getElementById("sticky-design1").style.scale="0.98";
                    document.getElementById("sticky-design2").style.scale="1";
                    document.getElementById("sticky-design3").style.scale="1";
                    document.getElementById("sticky-design4").style.scale="1";
                }
                else if(entry.target.id=="sticky-design3")
                {
                    document.getElementById("sticky-design1").style.scale="0.96";
                    document.getElementById("sticky-design2").style.scale="0.98";
                    document.getElementById("sticky-design3").style.scale="1";
                    document.getElementById("sticky-design4").style.scale="1";
                }
                else if(entry.target.id=="sticky-design4")
                {
                    document.getElementById("sticky-design1").style.scale="0.94";
                    document.getElementById("sticky-design2").style.scale="0.96";
                    document.getElementById("sticky-design3").style.scale="0.98";
                    document.getElementById("sticky-design4").style.scale="1";
                }
                else if(entry.target.id=="case-study-logo")
                {
                    entry.target.style.opacity="1";
                    entry.target.style.scale="1";
                    entry.target.style.translate="0vw 0vw";
                    type_1_observer.unobserve(entry.target);
                }
                else if(entry.target.id=="percent-1")
                {
                    
                    let i=0;
                    let timer_1=setInterval(()=>
                    {
                        i++;
                        entry.target.innerHTML=`${i}%`;
                        if(i==25)
                        clearInterval(timer_1);
                    },50);
                }
                else if(entry.target.id=="percent-2")
                {
                    
                    let i=0;
                    let timer_1=setInterval(()=>
                    {
                        i++;
                        entry.target.innerHTML=`${i}%`;
                        if(i==30)
                        clearInterval(timer_1);
                    },40);
                }
                else if(entry.target.id=="percent-3")
                {
                    
                    let i=0;
                    let timer_1=setInterval(()=>
                    {
                        i++;
                        entry.target.innerHTML=`${i}%`;
                        if(i==35)
                        clearInterval(timer_1);
                    },35);
                }
                else if(entry.target.id=="percent-4")
                {
                    
                    let i=0;
                    let timer_1=setInterval(()=>
                    {
                        i++;
                        entry.target.innerHTML=`${i}%`;
                        if(i==40)
                        clearInterval(timer_1);
                    },35);
                }
            }






            else
            {
                if(entry.target.id=="sticky-design1")
                {
                    document.getElementById("sticky-design1").style.scale="1";
                    document.getElementById("sticky-design2").style.scale="1";
                    document.getElementById("sticky-design3").style.scale="1";
                    document.getElementById("sticky-design4").style.scale="1";
                }
                else if(entry.target.id=="sticky-design2")
                {
                    document.getElementById("sticky-design1").style.scale="1";
                    document.getElementById("sticky-design2").style.scale="1";
                    document.getElementById("sticky-design3").style.scale="1";
                    document.getElementById("sticky-design4").style.scale="1";
                }
                else if(entry.target.id=="sticky-design3")
                {
                    document.getElementById("sticky-design1").style.scale="0.98";
                    document.getElementById("sticky-design2").style.scale="1";
                    document.getElementById("sticky-design3").style.scale="1";
                    document.getElementById("sticky-design4").style.scale="1";
                }
                else if(entry.target.id=="sticky-design4" )
                {
                    document.getElementById("sticky-design1").style.scale="0.96";
                    document.getElementById("sticky-design2").style.scale="0.98";
                    document.getElementById("sticky-design3").style.scale="1";
                    document.getElementById("sticky-design4").style.scale="1";
                }
            }
        })
},{ threshold:0.5  });

type_1.forEach((item)=>
{
    type_1_observer.observe(item);
})





    




