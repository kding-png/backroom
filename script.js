
let eyes = document.getElementsByClassName("eyes");

for (let i = 0; i < eyes.length; i++) {
    let mouseInside = false;
    let keyboardFocused = false;

    //eyes opacity
    function updateVisibility() {
        if (mouseInside) {
            eyes[i].style.opacity = 1;
        } else if (keyboardFocused) {
            eyes[i].style.opacity = 1;
        } else {
            eyes[i].style.opacity = 0;
        }
    }
    //when to show to eyes
    //"addeventlistener" is learned from codex
    eyes[i].addEventListener("mouseenter", function() {
        mouseInside = true;
        updateVisibility();
    });

    eyes[i].addEventListener("mouseleave", function() {
        mouseInside = false;
        updateVisibility();
    });

    eyes[i].addEventListener("focus", function() {
        keyboardFocused = true;
        updateVisibility();
    });

    eyes[i].addEventListener("blur", function() {
        keyboardFocused = false;
        updateVisibility();
    });
}
