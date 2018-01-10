onload = function (){
         inputs = document.querySelectorAll("input");
         for (var i = 0; i < inputs.length; i++) {
           inputs[i].addEventListener("focus", function(){
             -webkit-transform: scale(1.3);
             -moz-transform: scale(1.3);
             -ms-transform: scale(1.3);
             transform: scale(1.3);
           }
         }
}
