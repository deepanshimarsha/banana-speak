var btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate)
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector(".txt-output")

var testserverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getRequestUrl(text){
    return serverUrl + "?" + "text=" + text
}



function errorHandler(error){
    console.log("error occured", error)
    alert("server responding with an error")
}

function clickEventHandler(){
    var inputText = txtInput.value

    fetch(getRequestUrl(inputText))
    .then(Response => Response.json())
    .then(json => {
        txtOutput.innerText = json.contents.translated })
    .catch(errorHandler)
    
}

btnTranslate.addEventListener("click", clickEventHandler )