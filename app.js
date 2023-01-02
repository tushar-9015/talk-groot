

var btnTranslate = document.querySelector(".btn-translate");
var txtInput = document.querySelector("#txt-input");
var translatedOutput = document.querySelector("#translate-output");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text) {
    var encodedURI = encodeURI(text);
    return `${serverURL}?text=${encodedURI}`;
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with the server; please try again after some time")
}

function clickEventHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        translatedOutput.innerText = translatedText;
    })
    .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickEventHandler);