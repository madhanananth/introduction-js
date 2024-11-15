var input = document.getElementById('input');
var error = document.getElementById('error');
var result = document.getElementById('result');

function ageCategory() {
    error.innerHTML = "";
    result.innerHTML = "";
    var age = input.value ;


    if (age === "" || age < 0){
        error.innerHTML = "enter valid age";
    }
    else{
        if(age <= 12){
            result.innerHTML = "Hello child";
        }
        else if (age <= 19) {
            result.innerHTML = "Hi Teenager";
        }
        else if (age <= 64) {
            result.innerHTML = "adult";
        }
        else{
            result.innerHTML = "Hello senior";
        }
    }
}
