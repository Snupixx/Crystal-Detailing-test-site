// =========================
// CRYSTAL DETAILING
// Kleine Interaktionen
// =========================


// Wenn die Seite geladen wurde
document.addEventListener("DOMContentLoaded", () => {

    console.log("Crystal Detailing Website geladen.");

    // Alle Links innerhalb der Navigation finden
    const navigationLinks = document.querySelectorAll(
        ".nav-links a"
    );

    // Bei jedem Link
    navigationLinks.forEach(link => {

        link.addEventListener("click", () => {

            console.log(
                "Navigation zu:",
                link.textContent
            );

        });

    });

});