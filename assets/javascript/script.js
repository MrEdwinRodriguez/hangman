$(document).ready(function(){

  var alphabets = ['A','B','C','D', 'E', 'F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P','Q','R','S', 'T', 'U', 'V', 'W', 'X' , 'Y','Z']

  console.log(alphabets);


  var phraseArr = ['HELLO WORLD', 'BYE WORLD', 'HI WORLD', 'I LOVE CODING', 'SCHOOL IS COOL', 'HAMMER'];

  var index = Math.floor((Math.random() * phraseArr.length));
  
  phrase = phraseArr[index]
  console.log(phrase);

var counter = 0;
var lives = 9;

// create spaces
  for(i=0; i < phrase.length; i++){

      if(phrase[i] == ' '){
      var empty = $('<div>');
      empty.addClass("index"+i)
      empty.addClass("indexAll")
      $(empty).append("- ");
      $('#phraseHere').append(empty);

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
      
    
    function check(x){
      for(i=0; i<phrase.length ; i++){
        if(phrase[i] == x){
        hits++;
        console.log('hi');
        console.log(hits);

      }
    }
    }       
    });// end of on click 









});//end document ready jquery