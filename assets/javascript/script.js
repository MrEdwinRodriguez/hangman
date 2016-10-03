$(document).ready(function(){

  var alphabets = ['A','B','C','D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P','Q','R','S', 'T', 'U', 'V', 'W', 'X' , 'Y','Z']

  console.log(alphabets);

var counter = 0;
var spaces = 0;
var lives = 9;
var wins = 0;
var losses = 0;


function newWord(){

  var phraseArr = ['HELLO WORLD', 'BYE WORLD', 'HI WORLD', 'I LOVE CODING', 'SCHOOL IS COOL', 'HAMMER'];

  var index = Math.floor((Math.random() * phraseArr.length));
  
  phrase = phraseArr[index]
  console.log(phrase);


// create spaces
  for(i=0; i < phrase.length; i++){

      if(phrase[i] == ' '){
      var empty = $('<div>');
      empty.addClass("index"+i)
      empty.addClass("indexAll")
      $(empty).append("- ");
      $('#phraseHere').append(empty);
    spaces++;

} 
  else{
      var empty = $('<div>');
      empty.addClass("index"+i)
      empty.addClass("indexAll")
      $(empty).append("_ ");
      $('#phraseHere').append(empty);
      counter++;



  }
}
}
newWord();
createLetters();
console.log(counter)    
  
var hits = 0;

//create buttons with letter
function createLetters(){
  for (i=0; i<alphabets.length; i++){

      var letterBtn = $('<button>');
      letterBtn.addClass('buttons')
      letterBtn.attr('data-let', alphabets[i]);
      letterBtn.text(alphabets[i]);
      $('.letters').append(letterBtn);
}
}

// //check if you won
// function winCheck(correct){

//     if(correct == counter){
//     console.log('you win');
//     $("#phraseHere").empty()
//     $(".letters").empty()
//     alert('you win')
//     console.log(counter);
//     wins++;

//     newWord();
//     createLetters();
//     $('#winScore').empty();
//     $('#winScore').append(wins);
//     }else{
//     console.log('keep playing');
//     }
// }

// //check if loss
// function lossCheck(remain){
//     if(remain == 0){
//     console.log('you lose');
//     losses++;
//     $('#loseScore').empty();
//     $('#loseScore').append(losses);    
//     }else{
//     con
//   sole.log('keep playing wrongs');
//     }
// }


    $('.buttons').on('click', function(){
      var letter = $(this).text();
      
      $(this).toggle();
      console.log(letter);
      
    check(letter);
      
 //function check   
    function check(x){
    var wrong = 0;
      for(i=0; i<phrase.length ; i++){
        if(phrase[i] == x){
        hits++;
        $('#playOne').animate({marginLeft: '+=100px'});
        // document.getElementsByClassName('index'+i).innerHTML = x;
         $('.index'+i).empty();
         $('.index'+i).append(x);
        // document.getElementsById("phraseHere").innerHTML = x;

        
    console.log("hits:" +  hits);

    //calls function to verify if game is over or not
    winCheck(hits);

      }else
        {
        
        wrong++;
        diff = wrong - spaces;
        if(diff == counter)
        {
        lives--;
        $('#playTwo').animate({marginLeft: '+=100.5px'});
        console.log("lives" + lives);
        lossCheck(lives);
        }
        
    }
    
    

    }
    } 

    });// end of on click 


//check if you won
function winCheck(correct){

    if(correct == counter){
    console.log('you win');
    $("#phraseHere").empty()
    $(".letters").empty()
    alert('you win')
    console.log(counter);
    wins++;

    newWord();
    createLetters();
    $('#winScore').empty();
    $('#winScore').append(wins);
    }else{
    console.log('keep playing');
    }
}

//check if loss
function lossCheck(remain){
    if(remain == 0){
    console.log('you lose');
    losses++;
    $('#loseScore').empty();
    $('#loseScore').append(losses);    
    }else{
    console.log('keep playing wrongs');
    }
}











});//end document ready jquery