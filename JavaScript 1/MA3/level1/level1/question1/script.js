//Use RegEx to validate form
document.getElementById("submit").addEventListener("click", function () {
    var inputFieldArray = document.getElementsByTagName("input");

    for(var i=0; i < inputFieldArray.length; i++){
        var fieldInput = inputFieldArray[i].value;

        if(i < 2){
            if(fieldInput === ""){
                console.log(inputFieldArray[i].name + " is empty");
            }
        }

        if(i > 1){
            var pattern = new RegExp(inputFieldArray[i].pattern);
            var test = pattern.test(fieldInput);
            if(test === false){
                console.log(inputFieldArray[i].name + " is wrong")
            }
        }
    }
})
