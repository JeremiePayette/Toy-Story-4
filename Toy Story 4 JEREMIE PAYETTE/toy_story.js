document.getElementById("Submit-Button").onclick = function(){

    var userinput = document.getElementById("ratingInput").value;
    var output = ("You said it was " + userinput + "!")
    document.getElementById("ratingOutput").innerHTML = output
}