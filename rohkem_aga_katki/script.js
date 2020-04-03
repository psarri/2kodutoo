var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  myNodelist[i].appendChild(span);
}


var close = document.querySelectorAll("span.close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {


  var li = document.createElement("li");

  var close_span_icon = document.createElement("span");
  close_span_icon.innerHTML = "\u00D7";
  close_span_icon.className = "close";
  close_span_icon.onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }


  var categoryVal = document.getElementById("myCategory").value;
  var titleVal = document.getElementById("myTitle").value;
  var contentVal = document.getElementById("myContent").value;
  var dateVal = document.getElementById("myDate").value;

  if (categoryVal && titleVal && contentVal && dateVal && categoryVal != "Kategooria") {

    var text_inside_li = document.createTextNode(`${categoryVal} | ${titleVal} | ${contentVal} | ${dateVal} | `);

    li.appendChild(text_inside_li);
    li.appendChild(close_span_icon);


    document.getElementById("myUL").appendChild(li);

  } else {
    alert("Please fill all the fields!")
  }
}


function sortByTitle() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      var current_item = b[i].innerHTML.toLowerCase();
      var currentTitle = current_item.split(" | ")[1];

      var next_item = b[i + 1].innerHTML.toLowerCase();
      var nextTitle = next_item.split(" | ")[1];

      if (currentTitle > nextTitle) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}



function sortByCategory() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      var current_item = b[i].innerHTML.toLowerCase();
      var currentCategory = current_item.split(" | ")[0];

      var next_item = b[i + 1].innerHTML.toLowerCase();
      var nextCategory = next_item.split(" | ")[0];

      if (currentCategory > nextCategory) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}




function sortByDate() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      var current_item = b[i].innerHTML.toLowerCase();
      var currentDate = current_item.split(" | ")[3];
      var currentDate = new Date(currentDate);


      var next_item = b[i + 1].innerHTML.toLowerCase();
      var nextDate = next_item.split(" | ")[3];
      var nextDate = new Date(nextDate);


      if (currentDate > nextDate) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}



function clearFilter() {
  var myNodelist = document.getElementsByTagName("LI");


  for (let index = 0; index < myNodelist.length; index++) {
    const element = myNodelist[index];
    element.style.display = "block";
  }
}



function filterByContent() {
  var myNodelist = document.getElementsByTagName("LI");
  var filterValue = document.getElementById("filterVal").value;
  var i;


  for (let index = 0; index < myNodelist.length; index++) {
    const element = myNodelist[index];
    if (!element.innerText.includes(filterValue)) {
      element.style.display = "none";
    }
  }

}