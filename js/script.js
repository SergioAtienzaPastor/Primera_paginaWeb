//Boton de subida
document.getElementById("boton").addEventListener("click",scrollUp);
document.getElementById("alerta").addEventListener("click",alerta);
function scrollUp(){

    var desplazamiento=document.documentElement.scrollTop || document.body.scrollTop;
    
    if(desplazamiento>0){
        
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0,desplazamiento-(desplazamiento/23));
    }
}

buttonUp=document.getElementById("boton");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if(scroll>2000){
        buttonUp.style.transform="scale(1)";
    }else if(scroll < 2000){
        buttonUp.style.transform="scale(0)";
    }
}
function alerta(){
    alert("No programado aun ");
}
function getanswer(q){
    $.get("http://www.omdbapi.com/?s="+q+"&apikey=a5eb3f80",function(rawdata){
        var rawstring=JSON.stringify(rawdata);
        data=JSON.parse(rawstring)
        var title=data.Search[0].Title;
        var year=data.Search[0].Year;
        var imdburl="https://www.imdb.com/title/"+data.Search[0].imdbID+"/";
        var posterurl=data.Search[0].Poster;
        document.getElementById('answer').innerHTML="<h1>"+title+"</h1><br><img src="+posterurl+"/><br><p>Year Released:"+year+"</p><br><p>IMDB page:<a href="+imdburl+"target='_blamnk>"+imdburl+"</a></p>";
        
    })
}
