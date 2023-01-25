var obj1 = document.getElementById("off");
var obj2 = document.getElementById("whitebody");
obj1.onclick = function()
{
    obj1.classList.toggle("on");
    obj2.classList.toggle("darkbody");
}