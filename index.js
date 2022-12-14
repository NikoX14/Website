var name="I'm Nikolaos Benashvili";
var i=0,show="";
var myInt,myInt2;

function letters(){
    if(i>name.length){
        clearInterval(myInt);
        timer2();
    }else{
        show=name.slice(0,i);
        document.getElementById("animation").innerHTML=show;
        i++
    }
    
}

function timer(){
    myInt=setInterval(letters,100);
}

function anim(){
    if(show.length<=23){
        show=show+"|";
        document.getElementById("animation").innerHTML=show;
    }else{
        show=show.slice(0,23);
        document.getElementById("animation").innerHTML=show;
    }
}

function timer2(){
    myInt2=setInterval(anim,450);
}