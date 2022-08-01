"use strict";

var output = document.querySelector('#text'); //input text

var form = document.querySelector('#signup'); // form

var print = document.querySelector('small'); //errror message target

form.addEventListener("submit", function (e) {
  var para = document.createElement('p');
  para.innerHTML = "Error! Input Cannot Be Empty";

  if (output.value == confirm()) {
    e.preventDefault();
    print.appendChild(para);
    return false;
  }

  function confirm() {
    return "";
  }

  list();

  function list() {
    e.preventDefault();
    var node = document.createElement("li");
    var textnode = document.createTextNode(output.value);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
  }

  output.value = "";
  print.removeChild(print.firstElementChild);
});