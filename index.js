var rellax = new Rellax(".rellax", {
  center: true,
});

var _CURRENT_ANGLE = 0;

$("#button").on("click", function () {
  _CURRENT_ANGLE += 120;

  $("#parent-1").css({ transform: "rotate(" + _CURRENT_ANGLE + "deg)" });
  $("#child-1").css({ transform: "rotate(-" + _CURRENT_ANGLE + "deg)" });
});
