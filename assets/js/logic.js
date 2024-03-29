//goes back... lol
function goBack() {
    window.history.back();
}
let dark;
//darkmode initiation *puts on sunglasses*
function toggleDarkMode() {
    if (dark) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

function enableDarkMode() {
    dark = true;
    document.body.style.backgroundColor = "var(--colorBlack)";
    document.querySelector('header').style.backgroundColor = "var(--colorDark)";
    document.querySelector('footer').style.backgroundColor = "var(--colorDark)";
    document.getElementById('blogForm').style.backgroundColor = "var(--colorDark)";
    document.getElementById("Darkmode").checked = true; 
}

function disableDarkMode() {
    dark = false;
    document.body.style.backgroundColor = "var(--colorWhite)"; 
    document.querySelector('header').style.backgroundColor = "var(--colorLight)";
    document.querySelector('footer').style.backgroundColor = "var(--colorLight)";
    document.getElementById('blogForm').style.backgroundColor = "var(--colorLight)";
    document.getElementById("Darkmode").checked = false; 
}

document.getElementById("Darkmode").addEventListener("change", function(event){
    if (event.target.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

window.onload = function(){
    if (localStorage.getItem('darkModeEnabled') === 'true') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

window.addEventListener('beforeunload', function() {
    localStorage.setItem('darkModeEnabled', dark.toString());
});
