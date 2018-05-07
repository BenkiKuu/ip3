var number;
//UI logic
//The BDD Test on JSFidle
//var number=parseInt(prompt("Enter number:"));
//var string='';
//calculate();

$(document).ready(function() {
  $("form#pingResult").submit(function(event) {
    $('#result').text("");
    event.preventDefault();
    number = parseInt($("input#number").val());
    startGame();
    $('#result').show();
    $('input#number').val('');
  });
});



//Business Logic
// The BDDTest on JSFidle
//function calculate(){
//for(var i=1;i<=countTonumber;i++){
//if((i % 3==0) && (i % 5==0)){
//   string+='pingpong';
//  }
//  else if(i % 5==0){
//   string+='pong';
//  }
//   else if(i % 3==0){
//   string+='ping';
//  }
//  else{
//     string+=i.toString();
//  }
//  if(i!=countTonumber){
//   string+=',';
//  }

//}
//   alert(string);
//   string='';

function startGame() {
  for (var index = 1; index <= number; index++) {
    if ((index % 3 == 0) && (index % 5 == 0)) {
      $("#result").append('PingPong </br>');
    } else if (index % 5 == 0) {
      $("#result").append('Pong </br>');
    } else if (index % 3 == 0) {
      $("#result").append('Ping </br>');
    } else {
      $("#result").append(index.toString() + '</br>');
    }
  }
}
