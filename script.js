var obj1 = document.getElementById("off");
var obj4 = document.getElementById("lightbody");
var obj5 = document.getElementById("sidecont");
var obj6 = document.getElementById("option");
var obj7 = document.getElementById("option1");
var obj8 = document.getElementById("option2");
var obj9 = document.getElementById("option3");
var obj10 = document.getElementById("option4");
var obj11 = document.getElementById("title");
var obj12 = document.getElementById("mod1");
var obj13 = document.getElementById("cart");
var obj14 = document.getElementById("mod2");
var obj15 = document.getElementById("cart2");
var obj16 = document.getElementById("mod3");
var obj17 = document.getElementById("cart3");
var obj18 = document.getElementById("mod4");
var obj19 = document.getElementById("cart4");
obj1.onclick = function()
{
    obj1.classList.toggle("on");
    obj4.classList.toggle("darkbody");
    obj5.classList.toggle("darksidecont");
    obj3.classList.toggle("darksidebar");
    obj6.classList.toggle("darkoption");
    obj7.classList.toggle("darkoption");
    obj8.classList.toggle("darkoption");
    obj9.classList.toggle("darkoption");
    obj10.classList.toggle("darkoption");
    obj11.classList.toggle("darktitle");
    obj12.classList.toggle("darkmod1");
    obj13.classList.toggle("darkcart");
    obj14.classList.toggle("darkmod1");
    obj15.classList.toggle("darkcart");
    obj16.classList.toggle("darkmod1");
    obj17.classList.toggle("darkcart");
    obj18.classList.toggle("darkmod1");
    obj19.classList.toggle("darkcart");
}

var obj2 = document.getElementById("menu");
var obj3 = document.getElementById("sidebar");
obj2.onclick = function()
{
    obj2.classList.toggle("menu1");
    obj3.classList.toggle("sidebar1");
}