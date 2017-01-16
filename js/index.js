$(document).ready( function() {

  displayDateAndTime();

  // This makes our clock 'tick' by repeatedly
  // running the displayTime function every second.
  setInterval(displayDateAndTime, 1000);

});

function displayDate() {
  var currentDate = new Date();

  var day = currentDate.getDay(); //returns number between 0-6
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  var date = currentDate.getDate();

  var month = currentDate.getMonth(); //returns number between 0-11
  var months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]

  //append 'st', 'nd', 'rd', or 'th' depending on date
  if (date % 10 === 1) {
    var ending = "st";
  } else if (date % 10 === 2) {
    var ending = "nd";
  } else if (date % 10 === 3) {
    var ending = "rd";
  } else {
    var ending = "th";
  }

  var html = days[day] + " " + months[month] + " " + date + ending
  return html

}

function displayDateAndTime() {
  var clockDiv = document.getElementById('clock');
  var time = new Date().toLocaleTimeString()

  clockDiv.innerText = displayDate() + " at " + time
}
