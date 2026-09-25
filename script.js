// =========================
// CRYSTAL DETAILING
// Website interactions
// =========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Crystal Detailing Website geladen.");


    // =========================
    // NAVIGATION
    // =========================

    const navigationLinks = document.querySelectorAll(
        ".nav-links a"
    );

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            console.log(
                "Navigation zu:",
                link.textContent.trim()
            );

        });

    });


    // =========================
    // NETLIFY FORM
    // =========================

    const form = document.getElementById("crystal-form");
    const status = document.getElementById("form-status");
    const submitButton = document.getElementById("submit-button");

    if (!form || !status || !submitButton) {
        return;
    }


    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        status.className = "form-status";
        status.textContent = "";

        submitButton.disabled = true;

        const buttonText = submitButton.querySelector("span:first-child");

        if (buttonText) {
            buttonText.textContent = "Wird gesendet ...";
        }


        const formData = new FormData(form);

        /*
         * Netlify Forms expects URL-encoded form data
         * for AJAX submissions.
         */

        try {

            const response = await fetch("/", {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded"
                },

                body: new URLSearchParams(formData).toString()

            });


            if (!response.ok) {
                throw new Error(
                    "Die Anfrage konnte nicht gesendet werden."
                );
            }


            status.className = "form-status success";

            status.textContent =
                "Vielen Dank! Deine Anfrage wurde erfolgreich gesendet. " +
                "Crystal Detailing wird sich bei dir melden.";


            form.reset();

        } catch (error) {

            console.error(
                "Formularfehler:",
                error
            );

            status.className = "form-status error";

            status.textContent =
                "Die Anfrage konnte leider nicht gesendet werden. " +
                "Bitte versuche es erneut oder rufe direkt an.";

        } finally {

            submitButton.disabled = false;

            if (buttonText) {
                buttonText.textContent = "Anfrage senden";
            }

        }

    });

});