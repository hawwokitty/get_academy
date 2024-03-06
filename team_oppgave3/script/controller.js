function runGasStation() {
  if (fuelAmount < 50) { // if fuelAmount is less than 10 show the gas station
    showGasStation = true;
    encounterDialogue = "You found a gas station, what do you want to do?"
    dialogue1 = "Refill car"
    dialogue2 = "Clean car"
    dialogue3 = "Keep driving"
    console.log("Show gas station");
  }
  if (fuelAmount > 50) { // if fuelAmount is greater than 10 don't show the gas station
    showGasStation = false;
    drive();
  }
}

function resolveGasStation(chosenOption) { 
  if (showGasStation = 1) {
    fuelAmount += currentEvent.gasStationFuelplus;
    console.log("**Gas station fuel has been added**");
    console.log("runGasStation();");
    updateView();
  }
  if (showGasStation = 2) {
    drive();
  }
}

// Toggles Dialogue/Choice buttons
/*function showOrHideButtons(showOrHide) {
  console.log("Show or Hide buttons") // this show out?
  //let showButtons = document.getElementById("dialogueOptions").style.display;
  if(showOrHide === "show") {
    showButtons = "block";
    console.log("Show button");
  }
  if (showOrHide === "hide") {
    showButtons = "none";
    console.log("Hide button");
  }
  updateView();
}
*/

// Start event generation etc
function drive() {
  // random timer goes here
  
  //temporary testing of event generation || replace setTimeout with random timer stuff when finished
  isEncounter = false;
  showGasStation = false;
  pickUp = false;
  //showOrHideButtons("hide");
  console.log("eventTimer(1 second);");
  setTimeout(() => {
    generateEvent();
  }, 2500);
}

// Generate random event ID, then send ID to start that event
function generateEvent() {
  // Variable to randomize chosen event
  let newEventID = 0;
  // Randomize variable
  newEventID = Math.floor(Math.random() * events.length);
  // Send variable to start event
  startEvent(newEventID);
  console.log("Set eventID to:", newEventID);
}

// Check event ID, start correct event function
function startEvent(eventIndex) { // eventIndex == newEventID sent to function, just different name due to index value usage
  // Set current event to correct object in array
  currentEvent = events[eventIndex];
  // Check if event type matches, call function for correct event
  if (currentEvent.eventType == "Encounter") {
    // Call event
    isEncounter = true;
    runEncounter();
  } else if (currentEvent.eventType == "Pickup") {
    // Shows pickup event display
    pickUp = true;
    // Call event
    runPickup();
  } else if (currentEvent.eventType == "Gas Station") {
    // Call event
    runGasStation();
  }
  console.log("startEvent(", eventIndex, ");");
  // Update fuel amount
  fuelAmount -= 5;
  // Checks win or lose conditions
  checkGameStatus();
}

// Set up correct display and text for event, and call required functions
function runPickup() {
  // Display correct image for object
    imagePath = currentEvent.imagePath;
  // Display dialogue with correct event object name
    encounterDialogue = "You found " + currentEvent.name + ", would you like to pick it up?";

    //showOrHideButtons("show");
  // Call event logic, result and user input options
    resolvePickup();
}

// Pickup event logic, result and user input options
function resolvePickup(chosenOption) {
  // Checks if user chose to pick up
  if(chosenOption == 1) {
    console.log("You picked it up");
    // Increases or removes coolness from car
    carCoolness += currentEvent.coolness;
    // Changes dialogue to let user know they picked up object and how much coolness they gained or lost
    encounterDialogue = "You picked up:" + currentEvent.name + ", you gained " + carCoolness;
    // Starts timer for new event
    drive();
    // Hides pickup event display
    pickUp = false;
  }
  // Checks if user chose NOT to pick up
  if(chosenOption == 2) {
    console.log("You didn't pick it up");
    // Changes dialogue to let user know they did not pick up the object
    encounterDialogue = "You didn't pick it up";
    // Starts timer for new event
    drive();
    // Hides pickup event display
    pickUp = false;
  }
  updateView();
}

// Set up correct display and text for event, and call required functions
function runEncounter() {
  // logs
  console.log("runEncounter");
  console.log(currentEvent);
  // Print encounter dialogue text to greeting dialogue
  encounterDialogue = currentEvent.greetingDialogue;
  // Change Dialogue button text
  dialogue1 = "Your name-a Jeff" // currentEvent.dialogue1
  dialogue2 = "I'm Steve"
  dialogue3 = "I'll drive safely"
  // Updates button text in updateView();
  updateView();
}

function dialogueOption(chosenOption) {
    console.log("DialogueOptions")
    console.log(currentEvent)
  // Checks which encounter is running and sends chosen option to correct function
    if (currentEvent.eventType == "Encounter") {
        resolveEncounter(chosenOption)
    }
    if (currentEvent.eventType == "Pickup") {
        resolvePickup(chosenOption)
    }
    if (currentEvent.eventType == "Gas Station") {
        resolveGasStation(chosenOption)
    }

}

// Encounter event logic, result and user input result
function resolveEncounter(chosenOption) {
  console.log("resolveEncounter");
  console.log("Previous coolness:",carCoolness);

  //const coolness_factor = Math.random(); // this bar 

  // if user choes correct response and has equal or more than required coolness, give positive result
  if (chosenOption == currentEvent.correctResponse && carCoolness >= currentEvent.requiredCoolness) {
    console.log("Positive result");
    // Set encounter dialogue to positive response
    encounterDialogue = currentEvent.response.positive.dialogue;
    // Add major increase to coolness
    carCoolness += currentEvent.response.positive.coolness;
  }
  // if user chose correct response and has less than required coolness, give neutral result
  else if (chosenOption == currentEvent.correctResponse && carCoolness < currentEvent.requiredCoolness) {
    console.log("Neutral result");
    // Set encounter dialogue to positive response
    encounterDialogue = currentEvent.response.neutral.dialogue;
    // Add minor increase to coolness
    carCoolness += currentEvent.response.neutral.coolness; 
  }
  // if wrong response and not enough coolness, give negative result
  else { 
    console.log("Negative result");
    // Set encounter dialogue to positive response
    encounterDialogue = currentEvent.response.negative.dialogue;
    // Reduce coolness
    carCoolness += currentEvent.response.negative.coolness;
  }

  console.log("New Coolness",carCoolness);
  UpdateCoolness();
  updateView();
  drive();
}

// Update visual coolness bar
function UpdateCoolness() {
  console.log("UpdateCoolness");
  carCoolness = Math.max(0, carCoolness);
  carCoolness = Math.min(carCoolness, coolness_max);

  document.getElementById('coolMeter').textContent = `Coolness: ${carCoolness}`;
  document.getElementById('coolnessBar').style.width = `${(carCoolness / coolness_max) * 100}%`;
}

UpdateCoolness();

//check game status
function checkGameStatus() {
  console.log("check game status");
  const overlay = document.querySelector('.overlay')
  if (carCoolness >= 100) {
    console.log("winner");
    overlay.classList.remove('hidden');
    document.querySelector('.game-status-text').textContent = "GRATULERER! 🏆";
    document.querySelector('.play-again-button').textContent = "Play again";
  }
  if (fuelAmount <= 0) {
    console.log("Game Over!");
    isGameOver = true;
    overlay.classList.remove('hidden');
    document.querySelector('.game-status-text').textContent = "GAME OVER!!!";
    document.querySelector('.play-again-button').textContent = "Try again";
  }
  updateView();
}

//restart game
function restart(){
    const overlay = document.querySelector('.overlay')
    overlay.classList.add('hidden')
    isGameOver = false;

    //reset model here (initial value)
        carCoolness = 66;
    fuelAmount = 100;
    currentEvent = null;

    updateView();
}