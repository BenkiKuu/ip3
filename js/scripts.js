
var number;
//UI logic
$(document).ready(function() {
  $("form#pingResult").submit(function(event) {
    $('#result').text("");
    event.preventDefault();
    number = parseInt($("input#number").val());
    startGame();

    $('#result').show();
    $('input#number').val('');



    event.preventDefault();
  });
});
//var number=parseInt(prompt("Enter number:"));
//var string='';
//condition();


//Business Logic

function startGame(){
for(var index=1;index<=number;index++){
  if((index % 3==0) && (index % 5==0)){
   $("#result").append('PingPong </br>');
  }
  else if(index % 5==0){
   $("#result").append('Pong </br>');
  }
   else if(index % 3==0){
   $("#result").append('Ping </br>');
  }
  else{
     $("#result").append(index.toString() + '</br>');
  }


}
}
