var n=1;
function move()
{
    var pic=document.getElementById("imgs");/*获取到图片对象*/
    pic.src="../images/"+((n++%5)+1)+".jpg";/*获取到图片对象的路径*/
}
window.setInterval("move()", 1000);;/*定时函数每隔1000毫秒执行move（）函数*/