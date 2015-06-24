$(document).ready(function(){

  var distance = 0;

    var p1 = {x: 3, y: 5};
    var p2 = {x: 7, y: 9};
    var p3 = {x: 13, y: 22};

    var dx1 = p2.x - p1.x;
    var dy1 = p2.y - p1.y;
    var dx2 = p3.x - p2.x;
    var dy2 = p3.y - p2.y;

    function getDistance1(x, y){
      distance1 =Math.sqrt(Math.pow(x, 2) + Math.pow(y,2));
      return distance1;
    }

    function getDistance2(y, z){
      distance2 =Math.sqrt(Math.pow(y, 2) + Math.pow(z,2));
      return distance2;
    }

    var result = getDistance1(dx1, dy1) + getDistance2(dx2, dy2);

    console.log('result: ', result);

    $("button").click(function(){

      console.log('clicked!');
      $("#result").html('Length total is: ' + result.toFixed(2));

    });
});
