let myBlock;
let myFuncList;
let funcList = [];
const movementArray = ['Right', 'Left', 'Up', 'Down']
// loading DOM content
document.addEventListener('DOMContentLoaded', function () {
  myBlock = document.createElement('div');
  myBlock.textContent = 'Hello World';
  myBlock.id = 'myBlock';
  document.body.appendChild(myBlock);
  myFuncList = document.createElement('div');
  document.body.appendChild(myFuncList);
});

// event handling keydown for moving obj
document.addEventListener('keydown', function (e) {
  e.preventDefault();
  let keyC = e.code;
  if (keyC === 'ArrowRight') {
    addFunList('Right')
  }
  else if (keyC === 'ArrowLeft') {
    addFunList('Left')
  }
  else if (keyC === 'ArrowUp') {
    addFunList('Up')
  }
  else if (keyC === 'ArrowDown') {
    addFunList('Down')
  }
  // getting random color when press key 'C'
  else if (keyC === 'KeyC') {
    myBlock.style.backgroundColor = randColor();
  }
  // getting random movements when press key 'R'
  else if (keyC === 'KeyR') {
    let temp = movementArray[Math.floor(Math.random() * movementArray.length)];
    addFunList(temp);
  }
  else if (keyC === 'Enter' || keyC === 'Space') {
    //excute function mover when press 'Enter' or 'Space'
    mover();
  }
  //console.log(keyC);
})

// add mover func, 
function mover() {
  // check first funcList is not empty, so we can fill the list of actions
  if (funcList.length > 0) {
    let curr = myBlock.getBoundingClientRect(); // get the current cooridination position, heigh,width,
    let el = funcList.shift(); // remove first action item from funcList
    let item = el.textContent.replace('+', ''); //removing '+' sign from

    myFuncList.removeChild(el); // remove the current item of action movement from view
    myBlock.innerHTML = 'Move:' + item;
    console.log(item);
    // check which item removed, to update its new posiiton
    if (item == 'Left') {
      myBlock.style.left = curr.left - curr.width + 'px';
    }
    if (item == 'Right') {
      myBlock.style.left = curr.left + curr.width + 'px';
    }
    if (item == 'Up') {
      myBlock.style.top = curr.top - curr.height + 'px';
    }
    if (item == 'Down') {
      myBlock.style.top = curr.top + curr.height + 'px';
    }
    setTimeout(mover, 300); // move it
  } else {
    myBlock.innerHTML = 'Set Path';
    return; //stop function here, no excution further
  }
}
// to add list of actions, movements, once the obj moves, on top of page
function addFunList(val) {

  let span = document.createElement('span');
  span.textContent = '+' + val;
  span.style.padding = '10px';
  span.style.border = '1px solid #ddd';
  myFuncList.appendChild(span);
  // add color when mouse over myFuncList span
  span.addEventListener('mouseover', function () {
    this.style.backgroundColor = 'red';
    this.style.color = 'white';
  });
  // add color when mouse over myFuncList span
  span.addEventListener('mouseout', function () {
    this.style.backgroundColor = 'white';
    this.style.color = 'black';
  });
  // removing action item from funcList when you click it
  span.addEventListener('click', function () {
    let curIndex = funcList.indexOf(this);
    console.log(curIndex);
    let temRemoved = funcList.splice(curIndex, 1);
    myFuncList.removeChild(this);
  })
  myFuncList.appendChild(span); //ading span to myFuncList view
  funcList.push(span);
  console.log(funcList);
}

// creating random HEX color
function randColor() {
  return '#' + Math.random().toString(16).substr(-6);
}

// goLeft move
function goLeft() {
  let temp = myBlock.offsetLeft;
  temp = temp - 50;
  myBlock.style.left = temp + 'px';
};

function goRight() {
  let temp = myBlock.offsetLeft;
  temp = temp + 50;
  myBlock.style.left = temp + 'px';
};

function goUp() {
  let temp = myBlock.offsetTop;
  temp = temp - 50;
  myBlock.style.top = temp + 'px';
};

function goDown() {
  let temp = myBlock.offsetTop;
  temp = temp + 50;
  myBlock.style.top = temp + 'px';
};

