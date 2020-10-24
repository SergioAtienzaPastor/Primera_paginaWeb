//Boton de subida
document.getElementById("boton").addEventListener("click",scrollUp);
document.getElementById("alerta").addEventListener("click",alerta);
function scrollUp(){

    var desplazamiento=document.documentElement.scrollTop || document.body.scrollTop;
    
    if(desplazamiento>0){
        
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0,desplazamiento-(desplazamiento/10));
    }
}

buttonUp=document.getElementById("boton");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if(scroll>200){
        buttonUp.style.transform="scale(1)";
    }else if(scroll < 200){
        buttonUp.style.transform="scale(0)";
    }
}
function alerta(){
    alert("No proogramado aun ");
}