// SpeedDial
// Handles popup behaviors
// @author Vivek Bhookya

// TODO::
// o When opening SpeedDial, we check first if a state is saved
// + If a state is saved, we populate the list and display popup2.html with the numbers
// + If no state is saved, we display popup1.html so users can specify a list
//
// o Add a way for users to change the state they are in
// o create arrays of organizations with their phone numbers per state ugh

// Extra credit
// o When clicking a phone number, open a Google hangouts call with that number

// Finished
// √ Save state submitted when users click "submit" into chrome.storage.sync

$(document).ready(function () {
  // document.getElementById('TEST4').innerHTML='state'; // this should run after we get STATE from storage
  // populate(); // fill list with phone numbers
  init();
  $("#submit").click(save); // save the state to storage
});

// Function init()
// Grab STATE from storage and replace 'test values' with the state
function init() {
  chrome.storage.sync.get('STATE', function(returnedObj) {
    if (!returnedObj.STATE && window.location.href !== 'chrome-extension://cjbjlcdbnfckcbodkefdlihlbahaokig/popup1.html') {
      window.open('popup1.html', "_self");
      // alert(window.location.href);
      // populate_list(returnedObj.STATE);
    }

    document.getElementById('TEST4').innerHTML = returnedObj.STATE;


  });

}

function populate_list(){

}

// Function save()
// Saves the user's state in chrome.storage
function save() {
  let state = document.getElementById('state')[0].value;
  chrome.storage.sync.set( {STATE: state}, function() {});
}
