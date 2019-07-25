$(document).ready()
var clic = 1;
var n = [];
var z = [true, true, true, true, true, true, true, true, true]
var names = ["player 1", "player 2"]
var xwin =0; 
var owin =0;

$("#play").click(function (){
  
   $("#page1").css("display", "none");
//    $("#page2").css("display", "block");
    $("#page2").fadeIn( 1000 );
    if($("#p1n").val() !== "")
        names[0] = $("#p1n").val();
    if($("#p2n").val() !== "")
        names[1] = $("#p2n").val();

    $("#name1").text(names[0]);
    $("#name2").text(names[1]);

}
)

$("#main").click(function (){
    if (z.indexOf(true) == -1) {
        return
    }
    if (clic % 2 === 0) {
        $("#turn").text("player 2");
    }
    else 
    $("#turn").text("player 1");

})

function clickchange (container) {
    debugger
    if (z[container.currentTarget.id] === true) {
        if (clic % 2 === 0) {
            document.getElementById("n"+container.currentTarget.id).innerHTML = "O"
            clic++;
        }
        else {
            document.getElementById("n"+container.currentTarget.id).innerHTML = "X"
            clic++;
        }
        z[container.currentTarget.id] = false;
    }
    check();
}

for(var i = 0; i < 9; i++) {
    var divelement = document.createElement('div');
    divelement.id = i;
    var parg = document.createElement('p');
    var pargId = "n"+ i
    parg.id = pargId;
    divelement.appendChild(parg);
    divelement.onclick = clickchange 
    document.getElementById('main').appendChild(divelement);
}

function check() {

    for (var i = 0; i < 9; i++) {
        var s = "#n" + i
        n[i] = $(s).text()
    }


if ((z.indexOf(true) !== -1)) {
    if (n[0] === n[1] && n[0] === n[2]
        && n[0] !== "") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[0] === "X"){
             $("#turn").text(names[0]+" is the winner");
            xwin++;
            $("#xwin").text(xwin)
            
            }
        else {
             $("#turn").text("o winner")
             owin++;
             $("#owin").text(owin)
        }
        $("#n0, #n1, #n2").css("color", "yellow")
    }
    if (n[3] === n[4] && n[4] === n[5] && n[3] !== "") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[3] === "X")
        {
             $("#turn").text(names[0]+" is the winner");
            xwin++;
            }
        else
             $("#turn").text("o winner")
    }
    if (n[6] === n[7] && n[6] === n[8] && n[6] !== "") {

        z = [false, false, false, false, false, false, false, false, false]
        if (n[6] === "X")
        {
             $("#turn").text(names[0]+" is the winner");
            xwin++;
            }
        else
             $("#turn").text("o winner")
    }
    if (n[0] === n[3] && n[0] === n[6] && n[0] !== "") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[0] === "X")
        {
             $("#turn").text(names[0]+" is the winner");
            xwin++;
            }
        else
             $("#turn").text("o winner")
    }
    if (n[1] === n[4] && n[1] === n[7] && n[1] !== "") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[4] === "X")
        {
             $("#turn").text(names[0]+" is the winner");
            xwin++;
            }
        else
             $("#turn").text("o winner")
    }
    if (n[2] === n[5] && n[2] === n[8] && n[2] !== "") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[2] === "X")
        {
             $("#turn").text(names[0]+" is the winner");
            xwin++;
            }
        else
             $("#turn").text("o winner")

    }
    if (n[2] === n[4] && n[2] === n[6] && n[2] !== "") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[2] === "X")
        {
             $("#turn").text(names[0]+" is the winner");
            xwin++;
            }
        else
             $("#turn").text("o winner")
    }
    if (n[0] === n[4] && n[0] === n[8] && n[0] !== "") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[0] === "X")
        {
             $("#turn").text(names[0]+" is the winner");
            xwin++;
            }
        else
             $("#turn").text("o winner")
    }
}
}