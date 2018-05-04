var str="";
var number;
//UI logic
$(document).ready(function() {
  $("form#pingResult").submit(function(event) {
    event.preventDefault();
    number = parseInt($("input#number").val());
    startGame();

    $('#result').text(str);
      str='';

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
   str+='pingpong';
  }
  else if(index % 5==0){
   str+='pong';
  }
   else if(index % 3==0){
   str+='ping';
  }
  else{
     str+=index.toString();
  }
  if(index!=number){
   str+=',';
  }
}
}
