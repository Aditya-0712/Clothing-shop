var obj1 = document.getElementById("off");
var obj4 = document.getElementById("lightbody");
var obj5 = document.getElementById("sidecont");
obj1.onclick = function()
{
    obj1.classList.toggle("on");
    obj4.classList.toggle("darkbody");
    obj5.classList.toggle("darksidecont");
    obj3.classList.toggle("darksidebar");
}

var obj2 = document.getElementById("menu");
var obj3 = document.getElementById("sidebar");
obj2.onclick = function()
{
    obj2.classList.toggle("menu1");
    obj3.classList.toggle("sidebar1");
}