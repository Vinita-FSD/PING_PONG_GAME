//
alert("Game is start");
azlert("A is for move right");
alert("D is for move left");

let score1 = 0;
let score2 = 0;
var x = document.getElementById("rod1");
//    let position= x.style.position="relative";
let left = 0;
var innerdiv = document.getElementById("innerdiv");
let totalspace = innerdiv.offsetWidth;
let rodwidth = x.offsetWidth;
let avaiablespace = totalspace - rodwidth - 8;
console.log(avaiablespace);
console.log(totalspace);
console.log(rodwidth);

let moveby = 20;

document.addEventListener("keydown", function (event) {
  console.log("yes");

  if (event.keyCode == 65) {
    // left=parseInt( left)+moveby +'px';
    // x.style.left=left;
    console.log(left + "before");
    left += moveby;
    console.log(left + "after");
    if (left >= avaiablespace) {
      left = avaiablespace;
    }
    x.style.left = left + "px";
  }

  if (event.keyCode == 68) {
    left -= moveby;
    if (left <= 0) {
      left = 0;

      // x.style.position="stickey";
      // x.style.left= parseInt(x.style.left) +moveby +'';
      // left=x.style.left;
    }

    x.style.left = left + "px";
  }

  // if(x.style.left>="300px")
  // {

  //     x.style.position="stickey";
  //     x.style.left="300px";
  //     left=x.style.left;

  // }
});

var y = document.getElementById("rod2");
//    let positions= y.style.position="relative";

//  let position2= y.style.position="relative";
let left2 = 0;
var innerdiv = document.getElementById("innerdiv");
let totalspace2 = innerdiv.offsetWidth;
let rodwidth2 = y.offsetWidth;
let avaiablespace2 = totalspace2 - rodwidth2 - 8;
//  console.log(avaiablespace);
//  console.log(totalspace);
//  console.log(rodwidth);

let moveby2 = 20;
document.addEventListener("keydown", function (event) {
  if (event.keyCode == 65) {
    left2 += moveby;

    if (left2 >= avaiablespace2) {
      left2 = avaiablespace2;
    }
    y.style.left = left2 + "px";
  }

  if (event.keyCode == 68) {
    left2 -= moveby;
    if (left <= 0) {
      left2 = 0;

      // x.style.position="stickey";
      // x.style.left= parseInt(x.style.left) +moveby +'';
      // left=x.style.left;
    }

    y.style.left = left2 + "px";
  }
  // if(left2>="300px")
  // {

  //     y.style.position="stickey";
  //     y.style.left="300px";
  //     left2=y.style.left;

  // }
});

// ball moving//
// alert("Welcome to the game");

var b = document.getElementById("ball");
let ballposition = (b.style.position = "relative");
//  let moveby3=parseInt(Math.random()*10);
console.log("moveby" + moveby);
let dirt = 1;
let dirl = 1;
let ballleft = 0;
let ballltop = 0;
let leftvalue = parseInt(Math.random() * 10);
let topvalue = parseInt(Math.random() * 10);
ballleft = leftvalue;
ballltop = topvalue;
var innerdiv = document.getElementById("innerdiv");

let innerheight = innerdiv.offsetHeight;
let innerwidth = innerdiv.offsetWidth;
let ballheight = b.offsetHeight;
let avaibleheight = innerheight - ballheight - 8;
let avaiblewidth = innerwidth - ballheight - 8;
console.log(innerheight);
console.log(innerwidth);
console.log(ballheight);
console.log(avaibleheight);

function demo() {
  b.style.left = ballleft + "px";
  b.style.top = ballltop + "px";

  if (dirl == 1) {
    ballleft += leftvalue;
    // ballltop+=topvalue;
  } else {
    ballleft -= leftvalue;
    // ballltop+=topvalue;
  }
  if (dirt == 1) {
    ballltop += topvalue;
  } else {
    ballltop -= topvalue;
  }

  if (ballleft >= avaiblewidth) {
    dirl = 0;
    leftvalue = parseInt(Math.random() * 10);

    ballleft -= leftvalue;
  }

  if (ballltop >= avaibleheight) {
    let ballposition = b.style.left;
    balleft = ballposition;
    console.log("ballposition" + ballleft);

    let rod2position = y.offsetLeft;
    console.log("rod2position" + rod2position);
    let totalleft = rod2position + y.offsetWidth;
    console.log("TOTALLEFT" + totalleft);

    if (ballleft > rod2position && ballleft < totalleft) {
      dirt = 0;
      //   leftvalue=parseInt(Math.random()*10);
      topvalue = parseInt(Math.random() * 10);
      //   ballleft-=leftvalue;
      ballltop -= topvalue;
      score2++;
    } else {
      clearInterval(event);
      alert("Gameover");
    }
  }

  if (ballleft <= 0) {
    dirl = 1;
    leftvalue = parseInt(Math.random() * 10);
    //   topvalue=parseInt(Math.random()*10);
    ballleft += leftvalue;
    //   ballltop-=topvalue;
  }

  if (ballltop <= 0) {
    let ballposition2 = b.style.left;
    balleft = ballposition2;

    let rod1position = x.offsetLeft;

    let totalleft1 = rod1position + x.offsetWidth;

    if (ballleft > rod1position && ballleft < totalleft1) {
      dirt = 1;
      //   leftvalue=parseInt(Math.random()*10);
      topvalue = parseInt(Math.random() * 10);
      //   ballleft-=leftvalue;
      ballltop += topvalue;
      score1++;
      console.log(score1);
    } else {
      clearInterval(event);
      alert("Gameover");
    }
  }
}

// alert("score of first rod" +score1 +"score of first rod2" +score2);

// demo();

let event = setInterval(demo, 30);
