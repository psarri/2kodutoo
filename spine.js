var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
 

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
 
var edit = document.getElementById
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
 

function newElement() {
 

  var li = document.createElement("li");

  var categoryVal = document.getElementById("myCategory").value;
  var titleVal = document.getElementById("myTitle").value;
  var dateVal = document.getElementById("myDate").value;
 

  var text_inside_li = document.createTextNode(`${categoryVal} ${titleVal} ${dateVal}`);
 

  li.appendChild(text_inside_li);
 

  document.getElementById("myUL").appendChild(li);
}