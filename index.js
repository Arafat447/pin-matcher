function insertNumber(number){
    var existingNumber = document.getElementById("pin-input").value;
    var newNumber = existingNumber + number;
    document.getElementById("pin-input").value = newNumber;
}

function clearNumber(){
    document.getElementById("pin-input").value = "";
}

function deleteNumbers(){
    var existingNumber = document.getElementById("pin-input").value;
    document.getElementById("pin-input").value = existingNumber.slice(0,-1);
}

function pinGenerate(){
    var pin = Math.ceil(Math.random()*10000) ;
    if(pin>1000 && pin<10000){
        document.getElementById("generated-pin").value = pin;
    }
}

function submitPin(){
    var generatedPin = document.getElementById("generated-pin").value;
    var submitPin = document.getElementById("pin-input").value;
    var match = document.getElementById("match");
    var misMatch = document.getElementById("mismatch");
    if(generatedPin!='' && generatedPin==submitPin){
        match.style.display = "block";
        misMatch.style.display = "none";
    }
    else if(submitPin!=''){
        misMatch.style.display = "block";
        match.style.display = "none";
    }
    else{
        alert("Please enter a pin")
    }
}