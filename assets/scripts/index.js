
$( document ).ready(function() {
  
  let boardState;

  let activeGame = false;

  let newGameBegin = function(){
      activeGame = true;
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
  
  let playerMove = 'x';
  $('#showPlayersTurn').html(playerMove);

  let winner; //grey is o pink is x

  let scoreO = 0;
  let scoreX = 0;
  
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

  // check for tie
  let checkTie = function () {
  for (key in boardState) {
    if (boardState[key] == 'unclicked') {
      return false;   
    } 
  }
  return true;
  };

  // make moves and color the square accordningly
  $(".square").click(function () {
    if (activeGame == true) {
        if(boardState[this.id] == 'unclicked') {

          if(playerMove == 'o') {
        
              $(this).css('background-color','#EE178C');
            boardState[this.id] = 'o';
            playerMove = 'x';
            }

          else{
            $(this).css('background-color','#888888');
            boardState[this.id] = 'x';
            playerMove = 'o';

            }
          }
          else {
            console.log("this has been clicked before");
          }
    
          checkBoardGame();
          console.log('The winner is ' + winner)
          console.log('Its this players turn ' + playerMove);
          console.log(boardState);
           $('#showPlayersTurn').html(playerMove);
           endGame();
          };

  });


  let endGame = function(){
    if (winner == 'o' || winner == 'x') {
      if(winner == 'o'){
        scoreO += 1;
    } else {
        scoreX += 1;
    }
    winner = 'tie';
    activeGame = false;
    console.log("score o is: "+ scoreO +" and score x is " + scoreX);
  }}



    $( "#signInOrSignUp" ).click(function() {
      $( ".test" ).toggle();
    });

    $("#newGame").click(function() {
      newGameBegin();
    })


  }); 
