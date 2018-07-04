// SpeedDial
// Handles popup behaviors
// @author Vivek Bhookya

// TODO
// o Save state submitted when users click "submit" into chrome.storage.sync
// o When opening SpeedDial, we check first if a state is saved
// + If a state is saved, we populate the list and display popup2.html with the numbers
// + If no state is saved, we display popup1.html so users can specify a list
// o Add a way for users to change the state they are in
// o create arrays of organizations with their phone numbers per state ugh

// Extra credit
// o When clicking a phone number, open a Google hangouts call with that number

// Finished
// 

$(document).ready(function () {
  init(); // check if a value for STATE exists in storage. take appropriate action in response
  document.getElementById('TEST4').innerHTML='state'; // this should run after we get STATE from storage
  populate(); // fill list with phone numbers

  $("#submit").click(save); // save the state to storage
});

function save() {
  let state = document.getElementById('state')[0].value;
}
