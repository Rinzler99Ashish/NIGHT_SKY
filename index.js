let star_naming_code=0;





setInterval(()=>{
    let no_of_stars=Math.floor(Math.random()*2);
    star_start(no_of_stars);
},400);//produce number of stars



function star_life(newDiv){
    let duration_of_star=Math.floor(Math.random()*3500+3000);
    setTimeout(()=>{
        newDiv.remove();
    },duration_of_star);
    return duration_of_star;
}//duration of each star



async function star_style(newDiv,duration_of_star){
    newDiv.classList.add("star");

    let Y_axis_position=(Math.random()*40);
    newDiv.style.translate=(`0vw ${Y_axis_position}vw`);

    newDiv.style.animationDuration=`${duration_of_star+100}ms`;//make number to 0 to have twinkle effect

    let x=0,y=0,opacity=0,timer=0,time_clock;
    time_clock=setInterval(()=>{
        movement();
    },1)

    function movement(){
        if(timer++==duration_of_star){
            clearInterval(time_clock);
        }
        else{
            newDiv.style.translate=(`${x++/20}vw ${Y_axis_position}vw`);
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
    let no_of_dotstars=Math.floor(Math.random()*2);
    dotstar_start(no_of_dotstars);
},50);//produce number of stars

function dotstar_life(newDiv){
    let duration_of_star=Math.floor(Math.random()*7000+15000);
    let newDiv_opacity=Math.round(Math.random());
    if(newDiv_opacity==0)
    newDiv.style.backgroundColor="gray";
    setTimeout(()=>{
        newDiv.remove();
    },duration_of_star);
    return duration_of_star;
}

function dotstar_start(no_of_stars){
    let newDiv,dotstar_code,duration_of_dotstar;
    for(i=0;i<no_of_stars;i++)
    {   
        dotstar_code=-(star_naming_code++)%30;
        newDiv = document.createElement(`div`);;
        document.getElementById("dot-star").parentNode.insertBefore(newDiv,document.getElementById("dot-star").nextSibling);
        newDiv.id=dotstar_code;
        duration_of_dotstar=dotstar_life(newDiv);
        dotstar_style(newDiv,duration_of_dotstar);    }
}

async function dotstar_style(newDiv,duration_of_star){
    newDiv.classList.add("dot-star-class");

    let X_axis_position=(Math.random()*100);
    let Y_axis_position=(Math.random()*50);
    newDiv.style.translate=(`${X_axis_position}vw ${Y_axis_position}vh`);

    // newDiv.style.animationDuration=`${duration_of_star+100}ms`;//make number to 0 to have twinkle effect

    // let x=0,y=0,opacity=0,timer=0,time_clock;
    // time_clock=setInterval(()=>{
    //     movement();
    // },1)

    // function movement(){
    //     if(timer++==duration_of_star){
    //         clearInterval(time_clock);
    //     }
    //     else{
    //         newDiv.style.translate=(`${x++/20}vw ${Y_axis_position}vw`);
    //     }
    // }
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


