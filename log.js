var obj1 = document.getElementById("off");
var obj2 = document.getElementById("whitebody");
obj1.onclick = function()
{
    obj1.classList.toggle("on");
    obj2.classList.toggle("darkbody");
}

// var pw = document.getElementById("pass").value;

// function passlen()
// {
//     if (pw.length<8)
//     {
//         alert ("Password must be atleast 8 characters");
//         return false;
//     }
// }