var positionY = 100;
var velocity = 5;
var reverse = false;
var shape1 = document.getElementById("shape-1");
var shape2 = document.getElementById("shape-2");
var shape3 = document.getElementById("shape-3");
var shape4 = document.getElementById("shape-4");
var shape5 = document.getElementById("shape-5");
var shape6 = document.getElementById("shape-6");
var shape7 = document.getElementById("shape-7");
var shape8 = document.getElementById("shape-8");
var shape9 = document.getElementById("shape-9");
var Ymin = 100;
var Ymax = 700;

function moveShape1() {
  if (reverse) {
    positionY = positionY - velocity;
    shape1.style.top = positionY + "px";
    shape1.style.borderRadius = '0px';
  } else {
    positionY = positionY + velocity;
    shape1.style.top = positionY + "px";
    shape1.style.borderRadius = '50px';
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

function moveShape2() {
  if (reverse) {
    positionY = positionY - velocity;
    shape2.style.top = positionY + "px";
    shape2.style.borderRadius = '0px';
  } else {
    positionY = positionY + velocity;
    shape2.style.top = positionY + "px";
    shape2.style.borderRadius = '50px';
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

function moveShape3() {
  if (reverse) {
    positionY = positionY - velocity;
    shape3.style.top = positionY + "px";
    shape3.style.borderRadius = '0px';
  } else {
    positionY = positionY + velocity;
    shape3.style.top = positionY + "px";
    shape3.style.borderRadius = '50px';
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

function moveShape4() {
  if (reverse) {
    positionY = positionY - velocity;
    shape4.style.top = positionY + "px";
    shape4.style.borderRadius = '0px';
  } else {
    positionY = positionY + velocity;
    shape4.style.top = positionY + "px";
    shape4.style.borderRadius = '50px';
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

function moveShape5() {
  if (reverse) {
    positionY = positionY - velocity;
    shape5.style.top = positionY + "px";
    shape5.style.borderRadius = '0px';
  } else {
    positionY = positionY + velocity;
    shape5.style.top = positionY + "px";
    shape5.style.borderRadius = '50px';
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

function moveShape6() {
  if (reverse) {
    positionY = positionY - velocity;
    shape6.style.top = positionY + "px";
    shape6.style.borderRadius = '0px';
  } else {
    positionY = positionY + velocity;
    shape6.style.top = positionY + "px";
    shape6.style.borderRadius = '50px';
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

function moveShape7() {
  if (reverse) {
    positionY = positionY - velocity;
    shape7.style.top = positionY + "px";
    shape7.style.borderRadius = '0px';
  } else {
    positionY = positionY + velocity;
    shape7.style.top = positionY + "px";
    shape7.style.borderRadius = '50px';
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

function moveShape8() {
  if (reverse) {
    positionY = positionY - velocity;
    shape8.style.top = positionY + "px";
    shape8.style.borderRadius = '0px';
  } else {
    positionY = positionY + velocity;
    shape8.style.top = positionY + "px";
    shape8.style.borderRadius = '50px';
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

function moveShape9() {
  if (reverse) {
    positionY = positionY - velocity;
    shape9.style.top = positionY + "px";
    shape9.style.borderRadius = '0px';
  } else {
    positionY = positionY + velocity;
    shape9.style.top = positionY + "px";
    shape9.style.borderRadius = '50px';
  }

  if (
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

setInterval(moveShape1, 100);
setInterval(moveShape2, 100);
setInterval(moveShape3, 100);
setInterval(moveShape4, 100);
setInterval(moveShape5, 100);
setInterval(moveShape6, 100);
setInterval(moveShape7, 100);
setInterval(moveShape8, 100);
setInterval(moveShape9, 100);
