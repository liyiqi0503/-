var i=1;//全局变量
var t;

function lunbo(){
    var obj=document.getElementById("lb");
    i++;
    if(i>3)
    {
        i=1;
        obj.src="images/1.jpg";
    }
    else{
        obj.src="images/"+i+".jpg";
    }

}
setInterval("lunbo()",3000);