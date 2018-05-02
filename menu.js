function openTab(evnt, tabName) {
    switch (tabName) {
        case "Home":
            window.location.href = "index.html";
            break; 
        case "About":
            window.location.href = "about.html";
            break;
        case "Software":
            window.location.href = "software.html";
            break; 
        case "Hardware":
            window.location.href = "hardware.html";
            break; 
        case "Resume":
            window.location.href = "resume.html";
            break; 
        case "Contact":
            window.location.href = "contact.html";
    }
}