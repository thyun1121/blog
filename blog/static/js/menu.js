function openNav(){
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "250px";
 //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

$(document).ready( function() {

    $(".h1test").click( function(event) {
        alert("You clicked the button using JQuery!");
    });
});
