// SpeedDial
// Handles popup behaviors
// @author Vivek Bhookya
// @author Deepika Gudavalli

// TODO::
// o create arrays of organizations with their phone numbers per state ugh

// Extra credit
// o When clicking a phone number, open a Google hangouts call with that number

// Finished
// √ Save state submitted when users click "submit" into chrome.storage.sync
// √ When opening SpeedDial, we check first if a state is saved
// + If a state is saved, we populate the list and display popup2.html with the numbers
// + If no state is saved, we display popup1.html so users can specify a list
// √ Add a way for users to change the state they are in

// alchol anonymous
// planned parenthood
// suicide helplines
// drug helplines
// mental help helplines
// sexual abuse support helplines

// copy paste this for the states:
// 'AL': [],
// 'AK': [],
// 'AZ': [],
// 'AR': [],
// 'CA': [],
// 'CO': [],
// 'CT': [],
// 'DE': [],
// 'DC': [],
// 'FL': [],
// 'GA': [],
// 'HI': [],
// 'ID': [],
// 'IL': [],
// 'IN': [],
// 'IA': [],
// 'KS': [],
// 'KY': [],
// 'LA': [],
// 'ME': [],
// 'MD': [],
// 'MA': [],
// 'MI': [],
// 'MN': [],
// 'MS': [],
// 'MO': [],
// 'MT': [],
// 'NE': [],
// 'NV': [],
// 'NH': [],
// 'NJ': [],
// 'NM': [],
// 'NY': [],
// 'NC': [],
// 'ND': [],
// 'OH': [],
// 'OK': [],
// 'OR': [],
// 'PA': [],
// 'RI': [],
// 'SC': [],
// 'SD': [],
// 'TN': [],
// 'TX': [],
// 'UT': [],
// 'VT': [],
// 'VA': [],
// 'WA': [],
// 'WV': [],
// 'WI': [],
// 'WY'
//



var YWCA = {
 'AL': [],
 'AK': [],
 'AZ': [],
 'AR': [],
 'CA': [],
 'CO': [],
 'CT': [],
 'DE': [],
 'DC': [],
 'FL': [],
 'GA': [],
 'HI': [],
 'ID': [],
 'IL': [],
 'IN': [],
 'IA': [],
 'KS': [],
 'KY': [],
 'LA': [],
 'ME': [],
 'MD': [],
 'MA': [],
 'MI': [],
 'MN': [],
 'MS': [],
 'MO': [],
 'MT': [],
 'NE': [],
 'NV': [],
 'NH': [],
 'NJ': [],
 'NM': [],
 'NY': [],
 'NC': [],
 'ND': [],
 'OH': [],
 'OK': [],
 'OR': [],
 'PA': [],
 'RI': [],
 'SC': [],
 'SD': [],
 'TN': [],
 'TX': [],
 'UT': [],
 'VT': [],
 'VA': ['8046126126', '8046126126', '8046126126', '8046126126'],
 'WA': [],
 'WV': [],
 'WI': [],
 'WY': []
};

$(document).ready(function () {
  init();

  // Save the state to storage
  $("#submit").click(save);
  // Clear the state to enable the user to add a new state
  $("#change").click(remove);
});

// Function init()
// Grab STATE from storage and replace 'test values' with the state
function init() {
  chrome.storage.sync.get('STATE', function(returnedObj) {
    // If no STATE is currently saved, open the first popup
    // Second conditional is in place to avoid a permanent loop of refreshing the popup -- this rendered
    //  selecting a state very difficult
    if (!returnedObj.STATE &&
      window.location.href === 'chrome-extension://cjbjlcdbnfckcbodkefdlihlbahaokig/popup2.html') {
      window.open('popup1.html', "_self");
      // window.open('tel:+13096602340');
    }

    document.getElementById('stateAbr').innerHTML = returnedObj.STATE;
    populate_list(returnedObj.STATE);
  });

}

// Function populate_list()
// Calls addNumbers for each organization and their phone numbers
//  for the selected state
function populate_list(state) {
    addNumbers('YWCA', YWCA[state]);
    // addNumbers(blah['whatever'])
}

// Function save()
// Saves the user's state in chrome.storage
function save() {
  // [0] selects the dropdown part of the form ( [dropdown:submit button] )
  // .value gets what is selected
  let state = document.getElementById('state')[0].value;
  chrome.storage.sync.set( {STATE: state}, function() {});
}

// Function remove()
// Removes STATE in storage to enable the user to add a new state
function remove() {
  chrome.storage.sync.remove('STATE', function() {});
}


// Function addNumbers()
// Adds li objects of the organizations and their phone numbers
//  for the selected state
function addNumbers(org, numbers) {
  // Create the object for the organization name
  let li = document.createElement("p");
  let t = document.createTextNode(org);
  li.appendChild(t);
  document.getElementById("numbers").appendChild(li);

  // Now, create the objects for the numbers
  for (let i = 0; numbers[i] !== undefined; i++) {
    li = document.createElement("li");
    t = document.createTextNode(numbers[i]);
    li.appendChild(t);
    li.id = 'number';
    document.getElementById("numbers").appendChild(li);
  }

}
