document.getElementById("btnCopy").disabled = true;

function fangsyenKu(){
    var isiText = document.getElementById("textKu").value;
    var kecilin = isiText.toLowerCase();
    var textGanti = kecilin.replace(/[aiueo]/g, "i");
    document.getElementById("btnCopy").disabled = false;
    document.getElementById("result").innerHTML = textGanti;
}

function copyText(){
    // Copy the text
    /* Get the text field */
    var copyText = document.getElementById("result");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}

var result = document.getElementById("result").value;