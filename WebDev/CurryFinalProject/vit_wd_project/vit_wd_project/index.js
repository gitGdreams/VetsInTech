
function signedIn() {
    var clickToSignIn = document.getElementById('signIn').textContent
    var nowSignedIn = document.getElementById('signIn').textContent="You're now signed in!";
    clickToSignIn = nowSignedIn;
    document.getElementById('signIn').style.backgroundColor='mediumseagreen';
    document.getElementById('logoDiv').style.backgroundColor='powderblue';
}

let list = document.getElementById("mylist");
let count = 0;

function addPost() {
  let input = document.getElementById("postFeed").value;
  let randomlist = document.createElement("LI");
  let textnode = document.createTextNode(input);
  randomlist.appendChild(textnode);
  randomlist.setAttribute("id", count);
  list.appendChild(randomlist);

  let deleteBtn = document.createElement("BUTTON");
  let deleteText = document.createTextNode("Delete");
  deleteBtn.appendChild(deleteText);
  deleteBtn.setAttribute("onclick", "deleteItem(" + count + ")");
  randomlist.appendChild(deleteBtn);
  
  let editBtn = document.createElement("BUTTON");
  let editText = document.createTextNode("Edit");
  editBtn.appendChild(editText);
  editBtn.setAttribute("onclick", `editItem(${count})`);
  randomlist.appendChild(editBtn);
  
  count++;
  document.getElementById("postFeed").value="";
}

function deleteItem(id) {
  let item = document.getElementById(id);
  list.removeChild(item);
}

function editItem(id){
    let item = document.getElementById(id);
    let value = prompt("Edit post", item.innerText);
    item.innerText = value;
}


var position = 0;

function scrollup() {
  if (position < 2) {
    var slider = document.getElementById("slider");
    position += 1;
    var offset = position * 400 + 4;
    slider.style.transform = "translateY(-" + offset + "px)";
  }
}

function scrolldown() {
  if (position > 0) {
    var slider = document.getElementById("slider");
    position -= 1;
    var offset = position * 400 + 4;
    slider.style.transform = "translateY(-" + offset + "px)";
  }
}


// function signedOut () {
//     var clickToSignIn = document.getElementById('signIn').textContent
//     var nowSignedout = document.getElementById('signIn').textContent="You're now signed out!";
//     clickToSignIn=nowSignedout;
//     document.getElementById('div2').style.backgroundColor='powderblue';
//     document.getElementById('signIn').style.backgroundColor='mediumseagreen';
// }