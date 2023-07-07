function updateDateTime() {
  var element = document.getElementById('datetime');

  var now = new Date();
  var date = now.toLocaleDateString();
  var time = now.toLocaleTimeString();

  element.textContent = 'Today is ' + date + ' and the time is ' + time;

  setTimeout(updateDateTime, 1000); // Update every second
}

document.addEventListener('DOMContentLoaded', function() {
  updateDateTime(); // Initial call to display the current date and time
});

