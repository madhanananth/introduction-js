var input = document.getElementById('input');
var result = document.getElementById('result');
var error = document.getElementById('error');


function table() {
    result.innerHTML = "";
    error.innerHTML ="";
    var i = parseInt(input.value);
  
    if (isNaN(i)){
        error.innerHTML = "input is empty"
    }else{
        var times = 10 ;
        var count = 1;
        while (times >= count) {
            var multi = count*i;
            result.innerHTML += "<h2>" +count +' x '+ i + " = " + multi  + "</h2>";
    
            count = count + 1
    
        }
    }

}