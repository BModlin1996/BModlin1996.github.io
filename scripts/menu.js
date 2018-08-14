function openTab(evnt, tabName) {
    switch (tabName) {
        case "resume":
            window.location.href = "Resume.pdf";
            break;
    }
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
