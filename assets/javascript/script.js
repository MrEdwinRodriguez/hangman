$(document).ready(function(){

  var alphabets = ['A','B','C','D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P','Q','R','S', 'T', 'U', 'V', 'W', 'X' , 'Y','Z']

  console.log(alphabets);


  var phraseArr = ['HELLO WORLD', 'BYE WORLD', 'HI WORLD', 'I LOVE CODING', 'SCHOOL IS COOL', 'HAMMER'];

  var index = Math.floor((Math.random() * phraseArr.length));
  
  phrase = phraseArr[index]
  console.log(phrase);

var counter = 0;
var spaces = 0;
var lives = 9;


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

console.log(counter)    
  
var hits = 0;

//create buttons with letter

  for (i=0; i<alphabets.length; i++){

      var letterBtn = $('<button>');
      letterBtn.addClass('buttons')
      letterBtn.attr('data-let', alphabets[i]);
      letterBtn.text(alphabets[i]);
      $('.letters').append(letterBtn);


}

  


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
    }else{
    console.log('keep playing');
    }
}

//check if loss
function lossCheck(remain){
    if(remain == 0){
    console.log('you lose');
    }else{
    console.log('keep playing wrongs');
    }
}









});//end document ready jquery