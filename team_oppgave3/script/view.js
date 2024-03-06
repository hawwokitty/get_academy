 // view
 const app = document.getElementById("app");
 updateView();
 function updateView() {
   app.innerHTML = /*HTML*/ `
   <div id="car">
   <div id="road">
   
   </div> <!-- end of road -->
   <img class="carimg" src="car.png">
   <div class="road1"></div>
   <div class="road2"></div>
   <div class="road-lines"></div>
   
   </div> <!-- end of car -->

   <div id="text">
   <div id="coolness">Coolness: ${carCoolness}</div>
   <div id="fuel">Fuel = ${fuelAmount} </div>
   <button onclick='runGasStation()'>gas station</button>
   
   
   
   
   <button onclick='drive()'>Start Driving</button>
   <div id='dialogueOptions'>
   </div>
   ${showStuff}
   ${showEncounter}
   
   <div id="gameStatus">Coolness: <span id="coolMeter">0</span></div>
   <div id="coolnessBarContainer">
   <div id="coolnessBar"></div>
   </div>
   ${showGameOver}

    </div> <!-- text end -->
       `; // Hev encounter divs etc ned for testing

       if (pickUp) {
         showStuff = /*HTML*/ `
         <div id="objects">
         <div>${encounterDialogue}</div>
         <img class="objimg" src="${imagePath}">
         <button class="btn" onclick='dialogueOption(1)'>${dialogue4}</button>
         <button class="btn" onclick='dialogueOption(2)'>${dialogue5}</button>
         </div>
         `
      }
      if (isEncounter || showGasStation) {
        showEncounter = /*HTML*/ `
        <div id='dialogueOptions'>
        <div>${encounterDialogue} </div>
        <button id='dialogue1' onclick='dialogueOption(1)'>${dialogue1}</button>
        <button id='dialogue2' onclick='dialogueOption(2)'>${dialogue2}</button>
        <button id='dialogue3' onclick='dialogueOption(3)'>${dialogue3}</button>
        </div>
        `
      }

      if (isGameOver) {
        showGameOver = /*HTML*/ `
        <div class="overlay hidden">
        <div class="reset">
        <p class="game-status-text"></p>
        <button onclick="restart()" class="play-again-button">Play again</button>
        </div>
        </div>
        `
      }
    }
      
