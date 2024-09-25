// chapter 43 to 48
// Events

// question no 01 : Show an alert box on click on a link.
function abc() {
  alert("You clicked the link!");
}

// question no 02 : Display some Mobile images in browser. On click on an image Show the message in alert to user.
function showAlert(mobileName) {
  alert("You clicked on " + mobileName);
}

// question no 03 : Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.
function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

// question no 04 : Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.

// on index.html

// question no 05 : Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

var counter = 0;

function updateCounter() {
  document.querySelector("#h2").innerText = "Counter: " + counter;
}

function increase() {
  counter++;
  updateCounter();
}

function decrease() {
  counter--;
  updateCounter();
}


// chapters end 
