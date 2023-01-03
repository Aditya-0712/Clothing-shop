var obj1 = document.getElementById("off");
obj1.onclick = function()
{
    obj1.classList.toggle("on");
}

var obj2 = document.getElementById("menu");
var obj3 = document.getElementById("sidebar");
obj2.onclick = function()
{
    obj2.classList.toggle("menu1");
    obj3.classList.toggle("sidebar1");
}