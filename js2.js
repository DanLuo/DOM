var head=document.getElementById("p1");
var newhead=prompt("new head");
//document.getElementById("p1").innerHTML="Hello world";
//head.innerHTML=newhead;
$("#p1").text(newhead);

$("h1").fadeOut(3000).fadeIn(2000);

for (var i=0; i<3;i++)
{var hobby=prompt("Tell me your hobby");
 $("body").append("<p>"+hobby+"</p>");}

