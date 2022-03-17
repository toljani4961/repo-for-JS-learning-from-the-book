console.log("the main.js was loaded");
$(document).ready(function () {
  "use strict";
  paper.install(window);
  paper.setup(document.getElementById("mainCanvas"));

  //   var c;
  //   var b;
  //   for (var x = 25; x < 600; x += 50) {
  //     for (var y = 25; y < 200; y += 50) {
  //       c = Shape.Circle(x, y, 25);
  //       c.fillColor = "blue";
  //     }
  //   }
  //   for (var x = 25; x < 600; x += 50) {
  //     for (var y = 225; y < 400; y += 50) {
  //       b = Shape.Circle(x, y, 25);
  //       b.fillColor = "yellow";
  //     }
  //   }

  var tool = new Tool();
  var c = Shape.Circle(200, 200, 120);
  c.fillColor = "black";
  var text = new PointText(200, 200);
  text.jusification = "canter";
  text.fillColor = "white";
  text.fontSize = 20;
  text.content = "hello world";
  tool.onMouseDown = function (event) {
    var c = Shape.Circle(event.poin.x, event.point.y, 20);
    c.fillColor = "green";
  };

  paper.view.draw();
});
