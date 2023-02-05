
    var i=1;//全局变量
    var t;
	
	
	
    function chgimg(){
    var obj = document.getElementById("myimg");
    obj.src="img/dl1d.jpg";
}
    function resetimg(){
    var obj=document.getElementById("myimg");
    obj.src="img/dl1.jpg";
}
    function lunbo(){
    var obj=document.getElementById("lb");
    i++;
    if(i>5)
{
    i=1;
    obj.src="img/love1.jpg";
}
    else{
    obj.src="img/love"+i+".jpg";
}
}
    function start(){
    t=setInterval("lunbo()",1000);
}
    function stop(){
    clearInterval(t);
}