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

// replace these with organizations
var alcoholAnon = {
 'AL': [2052900060, 2514799994, 3342644122, 2568850323, 3347923422, 2568940120, 8559761008, 2567366000, 2565866621],

 'AK': [9072722312, 8447514393, 9073764777],

 'AZ': [6022641341, 5206244183, 6239377770, 9284458691],

 'AR': [5016647303, 5016236328, 4792537956, 4799673260, 8709331518],

 'CA': [7145564555, 7074462244, 8183624410, 7075462066, 6613224025, 7607582514, 6505771310, 9516951535, 5629897697, 8313733713, 9259394155, 8053891444, 5592216907, 9516539312, 2095722970, 2095331134, 6192658762, 5302726287, 7075576318],

 'CO': [3033224440, 7195461173, 9702243552, 3032385693, 7195735020, 3034478201, 9702459649, 9704760572, 3036957766, 3036599953, 3032879950],

 'CT': [2037786777, 8604821214, 8602239929, 2038695221, 8602675857, 8603549843, 2037552124, 2037552124],

 'DE': [3026555113],

 'DC': [2029669783, 3015876191],

 'FL': [8636880211, 9043998535, 9414267723, 9544620265, 4072605408, 3523728091, 3052968654, 8139339123, 3216330052, 8504334191, 3867584283, 7273239644, 9042642621, 8502241818, 3523600960, 5612764581, 7725621114, 3056422805, 8502442421, 3052386451],

 'GA': [4787452588, 4045253178, 7068608331, 9123563688, 7702537668, 7062799944, 2292739045, 7063742366],

 'HI': [8089461438],

 'ID': [2086674633, 2087563700, 2087212989],

 'IL': [3098287092, 2173734200, 3096871329, 3096869527, 2173732063, 3123461475, 3092749913, 8157416637, 6303776610, 6303552622, 8472898911, 2175255795],

 'IN': [3176327864, 7657421666, 8124344952, 5742347007, 2198446695, 7654548799, 2604716262, 2606688050, 5742958188, 5747537403],

 'IA': [3193389111, 5152828550, 3193655955, 5635567921, 5633245655, 3197527409, 6414236266, 3193387666, 5633594152, 5152669478, 5633245655, 7123289979, 5633229191, 6416281212, 5632634407, 7122521333],

 'KS': [8164717229, 7858233338, 8163779432, 9133719876, 9135356940, 7852352226, 3166843661, 7858420110, 8168616678, 8164717229, 9134929697, 8164369706, 9133833208, 9134413277, 8162148612, 8164529398, 8169141856, 9137245172, 9137229801],

 'KY': [2707825267, 8594917181, 2706830371, 2703627141, 8004678019, 8594917181, 8592330501, 5027100100],

 'LA': [3188652172, 5048383399, 2259300026, 3185616119, 9856268311, 3379910830, 2128703400],

 'ME': [2077744335],

 'MD': [4102724150, 4105432266, 3017331109, 3015876191, 3016620544],

 'MA': [6174269444, 4135322111, 4134482382, 5086277084, 5087529000],

 'MI': [3138315550, 2483323521, 2485416565, 2696845304, 5173771444, 6169139149, 2699647577, 6163923360, 5172653590, 7344820707, 2314144070, 6168477959],

 'MN': [9529220880, 9528811856, 6512275502, 8664232969, 5072895636, 6514522921, 2188293740, 6517770405, 9524476005, 6514233622, 5073888989, 3205878436, 9529353595, 6128712218, 3202353413, 6516454005, 6128613900, 7637815102, 3206321875],

 'MS': [6019820081, 6016361134, 6622803435, 6014822498, 6628461132, 6014260108, 6016931234],

 'MO': [3146473677, 5734424424, 8164717229, 5733580101, 8887404568, 8164619683, 8164610039, 8164619691, 4178237125],

 'MT': [8886072000],

 'NE': [4024385214, 4023719859, 7122521333, 4025561880, 4025561880],

 'NV': [7753249210, 7753551151, 7025981888, 7023878744, 7027965222, 7024339550],

 'NH': [6036226967],

 'NJ': [9086878566, 9738240555, 6095866902, 8564864444, 6096418855, 8564864446],

 'NM': [5754309502, 5059828932, 5052661900],

 'NY': [2128703400, 2126471680, 5162923040, 5164815138],

 'NC': [8282548539, 3362496636, 9104860738, 3367256031, 9104553666, 7048786404, 7043770244, 3368544278, 3368544278, 9197838214, 3368858520, 9199333877, 2526333716, 2527268540, 9198947070, 9197354221, 8288374440, 2529777744, 7048651561, 9105790303],

 'ND': [7012329930],

 'OH': [6142538501, 2162417387, 3302538181, 3304911989, 4193809862, 9372222211, 5133510422, 4196255995, 5133510422, 4195224800, 5134230102, 7406534869, 4409928383, 7403932439],

 'OK': [4055241100, 4055241100, 4058421200, 4058434630, 9186272224, 4057938005, 4059490910, 4053301160, 4052626573, 4057875777, 5802429000, 4058434630, 4057329084],

 'OR': [5414740782, 5032238569, 5034721172, 5417321850, 5413424113, 5412651953, 5418834970, 5412693265, 5033990599, 5038428958, 5036840415, ],

 'PA': [5704248532, 2155359609, 8144522675, 7172345390, 4124717472, 5706540488, 6103736500, 8142373757, 5703874940, 5702965344, 6103233450, 6103529897, 2153579821],

 'RI': [4017398777, 4014388860, ],

 'SC': [8032545301, 8642336454, 8645851930, 8434457119, 8435542998, ],

 'SD': [6056926070, 6052251292, 6055823833],

 'TN': [6158311050, 8655229667, 9014541414, 9316470225, 4234996003, 4239280871, 4234996003, 9017266750, 4234996003, 8656931317, 9313631854],

 'TX': [4099481591, 9728671115, 9406273800, 2547543336, 5123279927, 5124440071, 2813912463, 2812928334, 2108216325, 2812888191, 3256732711, 5127937168, 9724364516, 9729316334, 8306250057, 5128639938, 9405669989, 9725489161, 3619928911, 8173323533, ],

 'UT': [8013645520, 8013934728, 4356744791, 4356490022, 8014847871, 8013758620, 4356359603],

 'VT': [8022957611, 8022575801, 8028858281, 8023341213],

 'VA': [7032939753, ],

 'WA': [2534748897, 5094537680, 5096241442, 4252522525, 3604799050, 3604524212, 2532882237, 3602992826, 5095439924, 3603850266, 3607341688, 2065872838, 3607539934, 3603527344, 5099251771, 3603764522, 5095826761, 4256720987, 5094275476],

 'WV': [3042529444, 3042347511],

 'WI': [4147719119, 9209227512, 9204104620, 2627231224, 6083640520, 9204523375, 7158421120, 6082228989, 6082569682, 9207314331, 2626349656, 7153862932, 6127357276, 2625546611],

 'WY': [3076327706]
};
var YWCA = {
 'AL': [2053229922],

 'AK': [9076449600],

 'AZ': [6022580990, 5204478918],

 'AR': [5016668686, 5012278343, 8709311172, 8703583083, 5016668686],

 'CA': [3097883479, 7737831031, 7739553100, 3123726600, 7735965490, 9516879922],

 'CO': [3034430419, 7195426904, 3036652655],

 'CT': [8605251163, 2038696501, 8602254681, 8606452245, 2036552535],

 'DE': [3026550039, 3022244060, 3022731300, 3026587110, 8007738570],

 'DC': [2026260700, 2026679100, 2022326700],

 'FL': [3053779922, 5616400050, 5617926909, 3056515838, 3053816911, 3056255833, 5617926909, 5618332441, 5616400050],

 'GA': [7704272902, 4048923476],

 'HI': [8085387061, 8089357141, 8082472124],

 'ID': [2087431535],

 'IL': [3096620461],

 'IN': [2604244908, 5742339491, 2604244908, 2198819922, 7652843345, 7657420075, 8124221191, 7659660538],

 'IA': [3192347589, 5155733931, 5632422110, 6417528658, 3097883479, 5632422190, 5635563371, 5632422110, 5632422190, 5632448340, 3197536734, 3197520606],

 'KS': [7852331750, 7853622222, 3162637501, 7852331750],

 'KY': [8592666031, 5025876700, 8592310915],

 'LA': [3185504417, 3184423397, 3185504417, 9857329083, 3184458880, 5044829922, 3186519314, 3183875489, 3186749622, 3186749635, 2252247744, 2253830681],

 'ME': [2077954050],

 'MD': [4106267800, 4102227273],

 'MA': [5087672505, 4137323121, 4137323121, 9786870331, 5089993255, 9783746121, 9784659922, 4135625739, 5083665777, 4135866807, 6174916050, 4018319922, 9783329050, 6175855400],

 'MI': [6164594681, 3132599922, 2693455595, 8102387621, 9898949055, 8103592267],

 'MN': [3096620461],

 'MS': [9857329083, 6019480818, 6623287696, 6015839399, 6016641955, 6015834000, 6014285694, 2288755050, 6628909622, 6623711500, 2288318749, 6019480818, 9013982366, 6623357258, 6019245812, 6019929118, 6016381071],

 'MO': [3144261506, 3145311115, 3145359501, 3147257203, 8162324481, 3147271134, 3148214470, 3144274940, 8162321225, 3145340438, 3143882856, 3145311115, 3143829041, 3148679522],

 'MT': [4065436691, 4062526303, 4064428774, 4064521315],

 'NE': [4024628821, 4024343494, 3083849922, 4023456555, 4024628821],

 'NV': [7026505347],

 'NH': [6036255785],

 'NJ': [9087563500, 2014445600, 9083551995, 2018811700, 9737441796, 6093968291, 9736729500, 6094972100, 2013846357, 2016701230],

 'NM': [5052549922],

 'NY': [3097883479, 5742339491, 2127479329, 7183534553, 2172219922, 7182409057, 7188751190, 7164882237, 2127554500],

 'NC': [7045255770, 7043934017, 3362733461, 7043664296, 3363541589, 3368824126, 7045322244, 9107996820, 8282547206, 7043321622, 7043763495, 7042917214],

 'ND': [7012323449, 7018381812, 7012322547],

 'OH': [6142249121, 4192413235, 9374615550, 6142533910, 3304537644, 5138569800, 2168816878, 5132417090, 4192417386, 5137320450, 9372288336, 3307466361, 9377736626, 4192386639, 3308231840, 3303731010, 4403226308, 7402821261],

 'OK': [4059481770],

 'OR': [5032947400],

 'PA': [5703224637, 7177240516, 7248349390, 2159537793, 7172347931, 7178452631, 8146766528, 7172433818, 4123915100, 6103231888, 7176372125, 7173931735, 7172661661, 6108674669, 4123616433, 5704552046, 5703238167, 7173349171, 7178465400, 8143684235],

 'RI': [4017697450],

 'SC': [8437221644, 8037737158, 8037752763],

 'SD': [6053363190, 6053522793, 6053363660, 6053629438, 7012323449, 6053529433, 6059964311, 6057189622],

 'TN': [6152421199, 8655236126, 4239689444],

 'TX': [5123261222, 7138689922, 9155332311, 2102289922, 8067710184, 8067922723, 3618575661, 9157570306, 8173326191, 9155190002, 2104339922, 8067922723, 2148269922],

 'UT': [8015378604],

 'VT': [8028627520],

 'VA': [4348477751, 7576254248, 8046436761, 4239689444, 7572456026, 2026260700, 8046120663],

 'WA': [4255561350, 2532724181, 5093261190, 3603520593, 5096623531, 2064614888, 3604790522, 4254122360, 4252582766, 3606960167, 2067205566, 2063367000, 5092487796, 3607344820, 5095252570, 2067802931, 4252261266, 2533832593, 2064368660, 5093829922],

 'WV': [3042320511, 3043403594, 3043403562, 3043664480, 3043403646, 7402821261, 3044225465, 3043403549, 3047763323, 3049326480],

 'WI': [4143741800, 2628985530, 6082571436, 6087525445, 6082571436, 6087812783, 6087820706, 6087554750, 9204325581],

 'WY': [3073526635]
};

var plannedParent = {

};
var suicideHelp = {

};
var drugHelp = {

};

$(document).ready(function () {
  init();

  // Save the state to storage
  $("#submit").click(save);
  // Clear the state to enable the user to add a new state
  $("#change").click(remove);
  // $("#org").click(addNumbers);
});

$(document).on('click', 'p', function () {
  // $(this).attr('title', 'Click to visit ' + this.id);
  addNumbers(this, this.innerHTML, document.getElementById('stateAbr').innerHTML);
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
// Calls addOrgs for each organization and their phone numbers
//  for the selected state
function populate_list(state) {
  addOrgs('YWCA', YWCA[state]);
  addOrgs('Alcoholics anonymous', alcoholAnon[state]);
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

// Function addOrgs()
// Adds li objects of the organizations and their phone numbers
//  for the selected state
function addOrgs(org, numbers) {
  // Create the object for the organization name
  // there is nothing as of now

  let p = document.createElement("p");
  // <p></p>

  let t = document.createTextNode(org);
  // a string with the value of org, for ex "ywca"

  p.appendChild(t);
  // <p>ywca</p>

  p.id = 'org';
  // <p id='org'>ywca</p>

  document.getElementById("numbers").appendChild(p);
}

function addNumbers(elem, name, state) {
  if (elem.childElementCount > 0) {
    while (org.hasChildNodes()) {
      org.removeChild(org.firstChild);
    }
    return;
  }

  if (name === 'YWCA') {
    let numbers = YWCA[state];
    // Now, create the objects for the numbers
    for (let i = 0; numbers[i] !== undefined; i++) {
      li = document.createElement("li");
      t = document.createTextNode(numbers[i]);
      li.appendChild(t);
      li.id = 'number';

      elem.appendChild(li);
    }
  }
  if (name === 'Alcoholics anonymous') {
    let numbers = alcoholAnon[state];
    // Now, create the objects for the numbers
    for (let i = 0; numbers[i] !== undefined; i++) {
      li = document.createElement("li");
      t = document.createTextNode(numbers[i]);
      li.appendChild(t);
      li.id = 'number';

      elem.appendChild(li);
    }
  }
}
