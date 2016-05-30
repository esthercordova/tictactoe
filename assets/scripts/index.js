// 'use strict';

// // user require with a reference to bundle the file and use it in this file
// // var example = require('./example');

// // use require without a reference to ensure a file is bundled
// require('./example');

$( document ).ready(function() {
  
  let boardState;

  let newGameBegin = function(){
      boardState = {
        'top-left': 'unclicked',
        'top-center': 'unclicked',
        'top-right': 'unclicked',
        'middle-left': 'unclicked',
        'middle-center': 'unclicked',
        'middle-right': 'unclicked',
        'bottom-left': 'unclicked',
        'bottom-center': 'unclicked',
        'bottom-right': 'unclicked',
      };

      $(".square").css('background-color', 'white');
  }

  newGameBegin();
  
  let playerMove = true;

  let winner //grey is o pink is x
  
  let checkBoardGame = function  (){

    //row 1
    if( 'unclicked'!= boardState['top-left'] &&
     boardState['top-left'] == boardState['top-center'] && 
     boardState['top-center'] == boardState['top-right'] &&
     boardState['top-right'] == boardState['top-left']){

      if(boardState['top-left'] == 'x'){
        return winner = 'x';
      }
      else{
        return winner = 'o';
      }
    }
    //row 2
    else if('unclicked'!= boardState['middle-left'] &&
     boardState['middle-left'] == boardState['middle-center'] && 
     boardState['middle-center'] == boardState['middle-right'] &&
     boardState['middle-right'] == boardState['middle-left']){

      if(boardState['middle-left'] == 'x'){
        return winner = 'x';
      }
      else{
        return winner = 'o';
      }
    }
    //row 3
    else if( 'unclicked'!= boardState['bottom-left'] &&
     boardState['bottom-left'] == boardState['bottom-center'] && 
     boardState['bottom-center'] == boardState['bottom-right'] &&
     boardState['bottom-right'] == boardState['bottom-left']){
    
      if(boardState['bottom-left'] == 'x'){
        return winner = 'x';
      }
      else{
        return winner = 'o';
      }
    }
    //col 1
    else if( 'unclicked'!= boardState['top-left'] &&
     boardState['top-left'] == boardState['middle-left'] && 
     boardState['middle-left'] == boardState['bottom-left'] &&
     boardState['top-left'] == boardState['bottom-left']){
     
      if(boardState['top-left'] == 'x'){
        return winner = 'x';
      }
      else{
        return winner = 'o';
      }
    }
    //col 2
    else if( 'unclicked'!= boardState['top-center'] &&
     boardState['top-center'] == boardState['middle-center'] && 
     boardState['middle-center'] == boardState['bottom-center'] &&
     boardState['top-center'] == boardState['bottom-center']){
     
      if(boardState['top-center'] == 'x'){
        return winner = 'x';
      }
      else{
        return winner = 'o';
      }
    }
    //col 3
    else if( 'unclicked'!= boardState['top-right'] &&
     boardState['top-right'] == boardState['middle-right'] && 
     boardState['middle-right'] == boardState['bottom-right'] &&
     boardState['top-right'] == boardState['bottom-right']){
     
      if(boardState['top-right'] == 'x'){
        return winner = 'x';
      }
      else{
        return winner = 'o';
      }
    }
    //diagonal 1
    else if( 'unclicked'!= boardState['top-left'] &&
     boardState['top-left'] == boardState['middle-center'] && 
     boardState['middle-center'] == boardState['bottom-right'] &&
     boardState['bottom-right'] == boardState['top-left']){
     
      if(boardState['top-left'] == 'x'){
        return winner = 'x';
      }
      else{
        return winner = 'o';
      }
    }
    //diagonal 2
    else if( 'unclicked'!= boardState['top-right'] &&
     boardState['top-right'] == boardState['middle-center'] && 
     boardState['middle-center'] == boardState['bottom-left'] &&
     boardState['bottom-left'] == boardState['top-right']){
     
      if(boardState['top-left'] == 'x'){
        return winner = 'x';
      }
      else{
        return winner = 'o';
      }
    }
    else if (checkTie()==true) {
      console.log('tie');
    }

  };

  let checkTie = function () {
  for (key in boardState) {
    if (boardState[key] == 'unclicked') {
      return false;   
    } 
  }
  return true;
  };

  $(".square").click(function () {

    if(boardState[this.id] == 'unclicked') {

      if(playerMove == 'o') {
    
          $(this).css('background-color','#EE178C');
        playerMove = 'x';
        console.log(boardState[this.id] = 'x');
        }

      else{
        $(this).css('background-color','#888888');
        playerMove = 'o';
        console.log(boardState[this.id] = 'o')

        }
      }
      else {
        console.log("this has been clicked before");
      }
      console.log(boardState);
      checkBoardGame();
      console.log('The winner is ' + winner);

  });



    $( "#signInOrSignUp" ).click(function() {
      $( ".test" ).toggle();
    });

    $("#newGame").click(function() {
      newGameBegin();

    })

  }); 
