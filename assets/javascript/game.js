// Initialize variables
// wins
var wins=0;


// losses
var losses=0;
// currentUsersCrystal
var currentUsersCrystal=0;
// crystals 1 - 4
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
// targetCrystal
var targetCrystal;
// Create a function that sets crystals 1 - 4 with a random number between 1 - 12
function crystals(min,max){return Math.floor(Math.random()*(max-min))+min;
}
 alert(crystals(1,12));
  crystalOne=crystals(1,12);
  crystalTwo=crystals(1,12);
  crystalThree=crystals(1,12);
  crystalFour=crystals(1,12);
 
  // this function should also set the targetCrystal to a random Number between 19 - 120

targetCrystal=crystals(19,120);



// Create an event handler for when a player clicks on a crystal
$(document).ready(function(){
$("#computer-number").text(targetCrystal);
$("#one").click(function(){
 // increment currentUsersCrystal with the amount of the crystal that was clicked on
 $("#your-score").text(currentUsersCrystal+=crystalOne);
// check if currentUsersCrystal === targetCrystal
 if (currentUsersCrystal === targetCrystal){
  wins++;
  alert(wins);
  $("#wins").text(wins);
  crystals(1,12);
  $("#your-score").text(currentUsersCrystal=0);
  targetCrystal=crystals(19,120);
  $("#computer-number").text(targetCrystal);

}
else if (currentUsersCrystal >  targetCrystal){
  losses++
  $("#losses").text(losses); 
  crystals(1,12);
  $("#your-score").text(currentUsersCrystal=0);
  targetCrystal=crystals(19,120);
  $("#computer-number").text(targetCrystal);




}


});

$("#two").click(function(){
  // increment currentUsersCrystal with the amount of the crystal that was clicked on
 
  $("#your-score").text(currentUsersCrystal+=crystalTwo);
  // check if currentUsersCrystal === targetCrystal
  if (currentUsersCrystal === targetCrystal){
    wins++;
    alert(wins);
    $("#wins").text(wins);
    crystals(1,12);
    $("#your-score").text(currentUsersCrystal=0);
   targetCrystal=crystals(19,120);
   $("#computer-number").text(targetCrystal);
  }
  else if (currentUsersCrystal >  targetCrystal){
    losses++
    $("#losses").text( losses); 
    crystals(1,12);
    $("#your-score").text(currentUsersCrystal=0);
    targetCrystal=crystals(19,120);
    $("#computer-number").text(targetCrystal);
  }

 
 });

 $("#three").click(function(){
  // increment currentUsersCrystal with the amount of the crystal that was clicked on 
  $("#your-score").text(currentUsersCrystal+=crystalThree);
  // check if currentUsersCrystal === targetCrystal

  if (currentUsersCrystal === targetCrystal){
    wins++;
    alert(wins);
    $("#wins").text( wins);
    crystals(1,12);
    $("#your-score").text(currentUsersCrystal=0);
    targetCrystal=crystals(19,120);
    $("#computer-number").text(targetCrystal);
  }
  else if (currentUsersCrystal >  targetCrystal){
    losses++
    $("#losses").text( losses); 
    crystals(1,12);
    $("#your-score").text(currentUsersCrystal=0);
    targetCrystal=crystals(19,120);
    $("#computer-number").text(targetCrystal);
  
  }

 
 });

 $("#four").click(function(){
  // increment currentUsersCrystal with the amount of the crystal that was clicked on
  $("#your-score").text(currentUsersCrystal+=crystalFour);
  // check if currentUsersCrystal === targetCrystal

  if (currentUsersCrystal === targetCrystal){
    wins++;
    alert(wins);
    $("#wins").text( wins);
   crystals(1,12);
   $("#your-score").text(currentUsersCrystal=0);
   targetCrystal=crystals(19,120);
   $("#computer-number").text(targetCrystal);
  }
  else if (currentUsersCrystal >  targetCrystal){
    losses++
    $("#losses").text( losses); 
    crystals(1,12);
    $("#your-score").text(currentUsersCrystal=0);
    targetCrystal=crystals(19,120);
    $("#computer-number").text(targetCrystal);
  }



 });


});



 
   



  
    // if yes increment wins by 1
    // call the function that sets crystals 1 - 4 and the targetCrystal
    // Update UI
  // check if currentUsersCrystal > targetCrystal
    // increment losses by 1
    // call the function that sets crystals 1 - 4 and the target crystal
    // update UI
  // No winning/losing conditions happened but Update UI anyways