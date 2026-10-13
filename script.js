"use strict";

// Preserve the original hover and keyboard-focus reveal behavior.
document.querySelectorAll(".eyes").forEach((eyes) => {
    const updateVisibility = () => {
        const visible = eyes.matches(":hover") || document.activeElement === eyes;
        eyes.classList.toggle("is-visible", visible);
    };

    eyes.addEventListener("mouseenter", updateVisibility);
    eyes.addEventListener("mouseleave", updateVisibility);
    eyes.addEventListener("focus", updateVisibility);
    eyes.addEventListener("blur", updateVisibility);
    updateVisibility();
    eyes.classList.add("js-enabled");
});
