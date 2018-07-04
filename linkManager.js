// SpeedDial
// Handles popup behaviors
// @author Vivek Bhookya

$(document).ready(function () {
  init(); // check if a value for STATE exists in storage. take appropriate action in response
  document.getElementById('TEST4').innerHTML='state'; // this should run after we get STATE from storage
  populate(); // fill list with phone numbers

  $("#submit").click(save); // save the state to storage
});

function save() {
  let state = document.getElementById('state')[0].value;
}
