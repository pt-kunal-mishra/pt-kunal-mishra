window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI(){

    let height=parseInt(document.querySelector("#height").value);
    let weight=parseInt(document.querySelector("#weight").value);
let result =document.querySelector("#result");
    if (height === "" || isNaN(height)) {
        result.innerHTML = "<h2>provide a valid height<h2>";
    }
    else if (weight === "" || isNaN(weight)) {
        result.innerHTML = "<h2>provide a valid weight<h2>"
    }
    else{
        let bmi=(weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML=`Under Weight:<span>${bmi}</span>`
        }
        else if(bmi>=18.6 && bmi<24.9){
            result.innerHTML=`Normal:<span>${bmi}</span>`
        }
        else{
            result.innerHTML=`over weight:<span>${bmi}</span>`
        }
    }
}