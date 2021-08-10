document.getElementById("pin-generate").addEventListener('click', function(){
    let pin = (Math.ceil(Math.random()*10000)).toString();
    document.getElementById("pin-input").value = pin;
});

document.getElementById("numbers-key").addEventListener('click', function(event){
    let buttonInput = document.getElementById("button-input");
    let input = event.target.innerText;
    buttonInput.value = buttonInput.value + input;
});

document.getElementById("submit-button").addEventListener('click', function(){
    let pinInput = document.getElementById("pin-input").value;
    let buttonInput = document.getElementById("button-input").value;
    if(pinInput === buttonInput){
        document.getElementById("pin-match").style.display = "block";
    }
    else{
        document.getElementById("pin-not-match").style.display = "block";
    }
});

