$(document).ready()
var clic = 1;
var n = [];
var z = [true, true, true, true, true, true, true, true, true]

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


$("#d1").click(function () {
    if (z[0] === true) {
        if (clic % 2 === 0) {
            $("#n1").text("O");
            clic++;
        }
        else {
            $("#n1").text("X");
            clic++;
        }
        z[0] = false;
    }
    check();
}
)

$("#d2").click(function () {
    if (z[1] === true) {
        if (clic % 2 === 0) {
            $("#n2").text("O");
            clic++;
        }
        else {
            $("#n2").text("X");
            clic++;
        }
        z[1] = false;
    }
    check();
}
)


$("#d3").click(function () {
  
    if (z[2] === true) {
        if (clic % 2 === 0) {
            $("#n3").text("O");
            clic++;
        }
        else {
            $("#n3").text("X");
            clic++;
        }
        z[2] = false;
    }
    check();
}
)


$("#d4").click(function () {
    if (z[3] === true) {
        if (clic % 2 === 0) {
            $("#n4").text("O");
            clic++;
        }
        else {
            $("#n4").text("X");
            clic++;
        }
        z[3] = false;
    }
    check();
}
)

$("#d5").click(function () {
    if (z[4] === true) {
        if (clic % 2 === 0) {
            $("#n5").text("O");
            clic++;
        }
        else {
            $("#n5").text("X");
            clic++;
        }
        z[4] = false;
    }
    check();
}
)


$("#d6").click(function () {
    if (z[5] === true) {
        if (clic % 2 === 0) {
            $("#n6").text("O");
            clic++;
        }
        else {
            $("#n6").text("X");
            clic++;
        }
        z[5] = false;
    }
    check();
}
)



$("#d7").click(function () {
    if (z[6] === true) {
        if (clic % 2 === 0) {
            $("#n7").text("O");
            clic++;
        }
        else {
            $("#n7").text("X");

            clic++;
        }
        z[6] = false;
    }
    check();
}
)





$("#d8").click(function () {
    if (z[7] === true) {
        if (clic % 2 === 0) {
            $("#n8").text("O");
            clic++;
        }
        else {
            $("#n8").text("X");
            clic++;
        }
        z[7] = false;
    }
    check();
}
)



$("#d9").click(function () {
    if (z[8] === true) {
        
        if (clic % 2 === 0) {
            $("#n9").text("O");
            clic++;
        }
        else {
            $("#n9").text("X");
            clic++;
        }
        z[8] = false;

    }
    check();
}
)


function check() {

    for (var i = 0; i < 9; i++) {
        var s = "#n" + (i + 1)
        n[i] = $(s).text()
    }

    if (n[0] === n[1] && n[0] === n[2]
        && n[0] !== " ") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[0] === "X"){
             $("#turn").text("x winner");}
        else
             $("#turn").text("o 3")
    }
    if (n[3] === n[4] && n[4] === n[5] && n[3] !== " ") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[3] === "X")
             $("#turn").text("x winner");
        else
             $("#turn").text("o winner")
    }
    if (n[6] === n[7] && n[6] === n[8] && n[6] !== " ") {

        z = [false, false, false, false, false, false, false, false, false]
        if (n[6] === "X")
             $("#turn").text("x winner");
        else
             $("#turn").text("o winner")
    }
    if (n[0] === n[3] && n[0] === n[6] && n[0] !== " ") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[0] === "X")
             $("#turn").text("x winner");
        else
             $("#turn").text("o winner")
    }
    if (n[1] === n[4] && n[1] === n[7] && n[1] !== " ") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[4] === "X")
             $("#turn").text("x winner");
        else
             $("#turn").text("o winner")
    }
    if (n[2] === n[5] && n[2] === n[8] && n[2] !== " ") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[2] === "X")
             $("#turn").text("x winner");
        else
             $("#turn").text("o winner")

    }
    if (n[2] === n[4] && n[2] === n[6] && n[2] !== " ") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[2] === "X")
             $("#turn").text("x winner");
        else
             $("#turn").text("o winner")
    }
    if (n[0] === n[4] && n[0] === n[8] && n[0] !== " ") {
        z = [false, false, false, false, false, false, false, false, false]
        if (n[0] === "X")
             $("#turn").text("x winner");
        else
             $("#turn").text("o winner")
    }



}














