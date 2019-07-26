$(document).ready();
var clic = 1;
var n = [];
var z = [true, true, true, true, true, true, true, true, true];
var names = ["player 1", "player 2"];
var xwin = 0;
var owin = 0;
var gameFinish = false;
var u = 0;

$("#next").click(function() {
  clic = 1;
  var n = [];
  z = [true, true, true, true, true, true, true, true, true];
  $("#turn").text(names[0]);
  $("#n0, #n1, #n2, #n3 , #n4, #n5, #n6, #n7, #n8").css("color", "white");
  for (var i = 0; i < 9; i++) {
    document.getElementById("n" + i).innerHTML = "";
  }
  if (u === 1) {
    //(CHANGE ON CODE) to reset the computer variables and to put x on the middle
    $("#n4").text("X");
    z[4] = false;
    scenario1 = 0;
    scenario2 = 0;
    scenario3 = 0;
    scenario4 = 0;
    scenario5 = 0;
  }
  gameFinish = false;
});

$("#reset").click(function() {
  clic = 1;
  var n = [];
  z = [true, true, true, true, true, true, true, true, true];
  $("#turn").text("player 1");
  $("#n0, #n1, #n2, #n3 , #n4, #n5, #n6, #n7, #n8").css("color", "white");
  for (var i = 0; i < 9; i++) {
    document.getElementById("n" + i).innerHTML = "";
  }
  xwin = 0;
  owin = 0;
  $("#xwin").text(xwin);
  $("#owin").text(owin);
});

function reloadPage() {
  location.reload(true);
}

$("#singleplayer").click(function() {
  u = 1;
  $("#page1").css("display", "none");
  $("#page2").fadeIn(1000);
  if ($("#p1n").val() !== "") names[1] = $("#p1n").val();
  if ($("#p2n").val() !== "") names[1] = $("#p2n").val();
  names[0] = "Computer";
  $("#name1").text(names[0]);

  $("#name2").text(names[1]);
  $("#turn").text(names[0]);
  $("#n4").text("X");
  $("#turn").text(names[1]);
  z[4] = false;
});

$("#multiplayer").click(function() {
  u = 0;
  $("#page1").css("display", "none");
  $("#page2").fadeIn(1000);
  if ($("#p1n").val() !== "") names[0] = $("#p1n").val();
  if ($("#p2n").val() !== "") names[1] = $("#p2n").val();

  $("#name1").text(names[0]);
  $("#name2").text(names[1]);
  $("#turn").text(names[0]);
});

$("#main").click(function() {
  if (z.indexOf(true) == -1) {
    return;
  }
  if (u === 0) {
    if (clic % 2 === 0) {
      $("#turn").text(names[1]);
    } else $("#turn").text(names[0]);
  } else {
    $("#turn").text(names[0]);
  }
});

function clickchange(container) {
  if (u === 0) {
    if (z[container.currentTarget.id] === true) {
      if (clic % 2 === 0) {
        document.getElementById("n" + container.currentTarget.id).innerHTML = "O";
        clic++;
      } else {
        document.getElementById("n" + container.currentTarget.id).innerHTML = "X";
        clic++;
      }
      z[container.currentTarget.id] = false;
    }
    check();
  } else if (z[container.currentTarget.id] === true) {
    if (clic % 2 !== 0) {
      document.getElementById("n" + container.currentTarget.id).innerHTML = "O";
      clic = clic + 2;
      setTimeout(computer, 1000);
    }
    z[container.currentTarget.id] = false;
  }
}

var scenario1 = 0; //(CHANGE ON CODE) this variable is for computer turns number
var scenario2 = 0;
var scenario3 = 0;
var scenario4 = 0;
var scenario5 = 0;
function computer() {
  for (var i = 0; i < 9; i++) {
    var s = "#n" + i;
    n[i] = $(s).text();
  }
  //scenario 1
  if ((n[1] === "O" || n[3] === "O" || n[7] === "O" || n[5] === "O") && scenario1 === 0) {
    document.getElementById("n2").innerHTML = "X";
    scenario1++;
    scenario2 = -1;
    scenario3 = -1;
    scenario4 = -1;
    scenario5 = -1;
    z[2] = false;
  } else if (n[6] !== "O" && scenario1 === 1) {
    document.getElementById("n6").innerHTML = "X";
    scenario1++;
    z[6] = false;
  } else if (n[8] !== "O" && scenario1 === 1) {
    document.getElementById("n8").innerHTML = "X";
    scenario1++;
    z[8] = false;
  } else if (n[5] !== "O" && scenario1 === 2) {
    document.getElementById("n5").innerHTML = "X";
    scenario1++;
    z[5] = false;
  } else if (n[0] !== "O" && scenario1 === 2) {
    document.getElementById("n0").innerHTML = "X";
    scenario1++;
    z[0] = false;
  } else if (n[3] !== "O" && scenario1 === 2) {
    document.getElementById("n3").innerHTML = "X";
    scenario1++;
    z[3] = false;
  } else if (n[1] !== "O" && scenario1 == 3) {
    document.getElementById("n1").innerHTML = "X";
    scenario1++;
    z[1] = false;
  } else if (n[7] !== "O" && scenario1 == 3) {
    document.getElementById("n7").innerHTML = "X";
    scenario1++;
    z[7] = false;
  } // scenario 2
  else if (n[2] === "O" && scenario2 === 0) {
    document.getElementById("n8").innerHTML = "X";
    scenario2++;
    scenario1 = -1;
    scenario3 = -1;
    scenario4 = -1;
    scenario5 = -1;
    z[8] = false;
  } else if (n[0] !== "O" && scenario2 === 1) {
    document.getElementById("n0").innerHTML = "X";
    scenario2++;
    z[0] = false;
  } else if (n[1] !== "O" && scenario2 === 1) {
    document.getElementById("n1").innerHTML = "X";
    scenario2++;
    z[1] = false;
  } else if (n[7] !== "O" && scenario2 === 2) {
    document.getElementById("n7").innerHTML = "X";
    scenario2++;
    z[7] = false;
  } else if (n[5] !== "O" && scenario2 === 2) {
    document.getElementById("n5").innerHTML = "X";
    scenario2++;
    z[5] = false;
  } else if (n[3] !== "O" && scenario2 === 3) {
    document.getElementById("n3").innerHTML = "X";
    scenario2++;
    z[3] = false;
  } else if (n[6] !== "O" && scenario2 === 3) {
    document.getElementById("n6").innerHTML = "X";
    scenario2++;
    z[6] = false;
  } //scenario 3
  else if (n[0] === "O" && scenario3 === 0) {
    document.getElementById("n2").innerHTML = "X";
    scenario3++;
    scenario1 = -1;
    scenario2 = -1;
    scenario4 = -1;
    scenario5 = -1;
    z[2] = false;
  } else if (n[6] !== "O" && scenario3 === 1) {
    document.getElementById("n6").innerHTML = "X";
    scenario3++;
    z[6] = false;
  } else if (n[3] !== "O" && scenario3 === 1) {
    document.getElementById("n3").innerHTML = "X";
    scenario3++;
    z[3] = false;
  } else if (n[5] !== "O" && scenario3 === 2) {
    document.getElementById("n5").innerHTML = "X";
    scenario3++;
    z[5] = false;
  } else if (n[7] !== "O" && scenario3 === 2) {
    document.getElementById("n7").innerHTML = "X";
    scenario3++;
    z[7] = false;
  } else if (n[1] !== "O" && scenario3 === 3) {
    document.getElementById("n1").innerHTML = "X";
    scenario3++;
    z[1] = false;
  } else if (n[8] !== "O" && scenario3 === 3) {
    document.getElementById("n8").innerHTML = "X";
    scenario3++;
    z[8] = false;
  } // scenario 4
  else if (n[6] === "O" && scenario4 === 0) {
    document.getElementById("n8").innerHTML = "X";
    scenario4++;
    scenario1 = -1;
    scenario2 = -1;
    scenario3 = -1;
    scenario5 = -1;
    z[8] = false;
  } else if (n[0] !== "O" && scenario4 === 1) {
    document.getElementById("n0").innerHTML = "X";
    scenario4++;
    z[0] = false;
  } else if (n[3] !== "O" && scenario4 === 1) {
    document.getElementById("n3").innerHTML = "X";
    scenario4++;
    z[3] = false;
  } else if (n[5] !== "O" && scenario4 === 2) {
    document.getElementById("n5").innerHTML = "X";
    scenario4++;
    z[5] = false;
  } else if (n[1] !== "O" && scenario4 === 2) {
    document.getElementById("n1").innerHTML = "X";
    scenario4++;
    z[1] = false;
  } else if (n[7] !== "O" && scenario4 === 3) {
    document.getElementById("n7").innerHTML = "X";
    scenario4++;
    z[7] = false;
  } else if (n[2] !== "O" && scenario4 === 3) {
    document.getElementById("n2").innerHTML = "X";
    scenario4++;
    z[2] = false;
  } // scenario 5
  else if (n[8] === "O" && scenario5 === 0) {
    document.getElementById("n2").innerHTML = "X";
    scenario5++;
    scenario1 = -1;
    scenario2 = -1;
    scenario3 = -1;
    scenario4 = -1;
    z[2] = false;
  } else if (n[6] !== "O" && scenario5 === 1) {
    document.getElementById("n6").innerHTML = "X";
    scenario5++;
    z[6] = false;
  } else if (n[7] !== "O" && scenario5 === 1) {
    document.getElementById("n7").innerHTML = "X";
    scenario5++;
    z[7] = false;
  } else if (n[1] !== "O" && scenario5 === 2) {
    document.getElementById("n1").innerHTML = "X";
    scenario5++;
    z[1] = false;
  } else if (n[5] !== "O" && scenario5 === 2) {
    document.getElementById("n5").innerHTML = "X";
    scenario5++;
    z[5] = false;
  } else if (n[3] !== "O" && scenario5 === 3) {
    document.getElementById("n3").innerHTML = "X";
    scenario5++;
    z[3] = false;
  } else if (n[0] !== "O" && scenario5 === 3) {
    document.getElementById("n0").innerHTML = "X";
    scenario5++;
    z[0] = false;
  }
  if (!gameFinish) {
    $("#turn").text(names[1]);
  }
  check();
}

for (var i = 0; i < 9; i++) {
  var divelement = document.createElement("div");
  divelement.id = i;
  var parg = document.createElement("p");
  var pargId = "n" + i;
  parg.id = pargId;
  divelement.appendChild(parg);
  divelement.onclick = clickchange;
  document.getElementById("main").appendChild(divelement);
}

function finalwin() {
  if (xwin === 2) {
    $("#page2").css("display", "none");
    $("#page3").fadeIn(2500);
    $("#winner").text(names[0] + " is the final winner");
  } else if (owin === 2) {
    $("#page2").css("display", "none");
    $("#page3").fadeIn(5000);
    $("#winner").text(names[1] + " is the final winner");
  }
}

function check() {
  if (gameFinish) {
    return;
  }

  for (var i = 0; i < 9; i++) {
    var s = "#n" + i;
    n[i] = $(s).text();
  }

  {
    if (n[0] === n[1] && n[0] === n[2] && n[0] !== "") {
      z = [false, false, false, false, false, false, false, false, false];
      if (n[0] === "X") {
        $("#turn").text(names[0] + " is the winner");
        xwin++;
        $("#xwin").text(xwin);
      } else {
        $("#turn").text(names[1] + " is the winner");
        owin++;
        $("#owin").text(owin);
      }
      $("#n0, #n1, #n2").css("color", "yellow");
      gameFinish = true;
    } else if (n[3] === n[4] && n[4] === n[5] && n[3] !== "") {
      z = [false, false, false, false, false, false, false, false, false];
      if (n[3] === "X") {
        $("#turn").text(names[0] + " is the winner");
        xwin++;
        $("#xwin").text(xwin);
      } else {
        $("#turn").text(names[1] + " is the winner");
        owin++;
        $("#owin").text(owin);
      }
      $("#n3, #n4, #n5").css("color", "yellow");
      gameFinish = true;
    } else if (n[6] === n[7] && n[6] === n[8] && n[6] !== "") {
      z = [false, false, false, false, false, false, false, false, false];
      if (n[6] === "X") {
        $("#turn").text(names[0] + " is the winner");
        xwin++;
        $("#xwin").text(xwin);
      } else {
        $("#turn").text(names[1] + " is the winner");
        owin++;
        $("#owin").text(owin);
      }
      $("#n6, #n7, #n8").css("color", "yellow");
      gameFinish = true;
    } else if (n[0] === n[3] && n[0] === n[6] && n[0] !== "") {
      z = [false, false, false, false, false, false, false, false, false];
      if (n[0] === "X") {
        $("#turn").text(names[0] + " is the winner");
        xwin++;
        $("#xwin").text(xwin);
      } else {
        $("#turn").text(names[1] + " is the winner");
        owin++;
        $("#owin").text(owin);
      }
      $("#n0, #n3, #n6").css("color", "yellow");
      gameFinish = true;
    } else if (n[1] === n[4] && n[1] === n[7] && n[1] !== "") {
      z = [false, false, false, false, false, false, false, false, false];
      if (n[4] === "X") {
        $("#turn").text(names[0] + " is the winner");
        xwin++;
        $("#xwin").text(xwin);
      } else {
        $("#turn").text(names[1] + " is the winner");
        owin++;
        $("#owin").text(owin);
      }
      $("#n4, #n1, #n7").css("color", "yellow");
      gameFinish = true;
    } else if (n[2] === n[5] && n[2] === n[8] && n[2] !== "") {
      z = [false, false, false, false, false, false, false, false, false];
      if (n[2] === "X") {
        $("#turn").text(names[0] + " is the winner");
        xwin++;
        $("#xwin").text(xwin);
      } else {
        $("#turn").text(names[1] + " is the winner");
        owin++;
        $("#owin").text(owin);
      }
      $("#n5, #n8, #n2").css("color", "yellow");
      gameFinish = true;
    } else if (n[2] === n[4] && n[2] === n[6] && n[2] !== "") {
      z = [false, false, false, false, false, false, false, false, false];
      if (n[2] === "X") {
        $("#turn").text(names[0] + " is the winner");
        xwin++;
        $("#xwin").text(xwin);
      } else {
        $("#turn").text(names[1] + " is the winner");
        owin++;
        $("#owin").text(owin);
      }
      $("#n4, #n6, #n2").css("color", "yellow");
      gameFinish = true;
    } else if (n[0] === n[4] && n[0] === n[8] && n[0] !== "") {
      z = [false, false, false, false, false, false, false, false, false];
      if (n[0] === "X") {
        $("#turn").text(names[0] + " is the winner");
        xwin++;
        $("#xwin").text(xwin);
      } else {
        $("#turn").text(names[1] + " is the winner");
        owin++;
        $("#owin").text(owin);
      }
      $("#n0, #n4, #n8").css("color", "yellow");
      gameFinish = true;
    } else if (z.indexOf(true) === -1) {
      $("#turn").text("Draw!");
      gameFinish = true;
    }
  }
  finalwin();
}
