var taeterAuswahl = null;
function auswahl() {
    var buttons = document.getElementsByName("choice");

    buttons.forEach(function (button) {
        if (button.checked) {
            taeterAuswahl = button.value;
            return;
        }
    })

    var suspects = ["2", "6"];

    if (suspects.includes(taeterAuswahl)) {
        var element = document.getElementById(taeterAuswahl);
        element.style.display = "block";
    } else {
        window.location = "failure.html";
    }
}

function auswahl2() {
    var buttons = document.getElementsByName("choice");

    buttons.forEach(function (button) {
        if (button.checked) {
            taeterAuswahl = button.value;
            return;
        }
    })

    var suspects = ["8", "11"];

    if (suspects.includes(taeterAuswahl)) {
        window.location = "success.html";
    } else {
        window.location = "failure.html";
    }
}
