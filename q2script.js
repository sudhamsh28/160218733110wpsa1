function move_img(x) {
var step=200; // change this to different step value
switch(x){
case 4:
    var x=document.getElementById('i1').offsetTop;
    x= x + step;
    document.getElementById('i1').style.top= x+"px";
    break;

case 1:
    var x=document.getElementById('i1').offsetTop;
    x= x -step;
    document.getElementById('i1').style.top= x + "px";
    break;

case 2:
    var y=document.getElementById('i1').offsetLeft;
    y= y - step;
    document.getElementById('i1').style.left= y + "px";
    break;

case 3:
    var y=document.getElementById('i1').offsetLeft;
    y= y + step;
    document.getElementById('i1').style.left= y + "px";
    break;
}
}
