var markElement = document.getElementById('input');
var errorElement = document.getElementById('error');
var resultElement = document.getElementById('result')


function gradeCheck() {

    errorElement.innerHTML = "";
    resultElement.innerHTML ="";
    var mark = markElement.value;

    if (mark === "" || mark > 100  || mark < 0 ){
        
        if(mark === "") {
            errorElement.innerHTML = "input is empty";
        } 
        if ( mark < 0 || mark > 100){
            errorElement.innerHTML = " your mark must be 0 to 100";
        }

    }
    else{
        if (mark >= 90 && mark <= 100){
            resultElement.innerHTML = "your grade is 'A'" ;
        }
         else if (mark >= 80 && mark < 90){
            resultElement.innerHTML = "your grade is 'B'" ;
        }
        else if (mark >= 70 && mark < 80){
            resultElement.innerHTML = "your grade is 'C'" ;
        }
        else if (mark >= 60 && mark < 70){
            resultElement.innerHTML = "your grade is 'D'" ;
        }else {
            resultElement.innerHTML = "your grade is 'F'" ;
        }
        
    }

}