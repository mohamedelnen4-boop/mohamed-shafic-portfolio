document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");

    const navLinks =
        document.querySelectorAll(".main-nav a");


    /* =========================
       Safety Check
    ========================= */

    if (!menuToggle || !mainNav) {
        console.warn("Mobile menu elements not found.");
        return;
    }


    /* =========================
       Open / Close Menu
    ========================= */

    function openMenu() {

        mainNav.classList.add("open");

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );
    }


    function closeMenu() {

        mainNav.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    function toggleMenu(event) {

        event.preventDefault();
        event.stopPropagation();

        if (
            mainNav.classList.contains("open")
        ) {
            closeMenu();
        } else {
            openMenu();
        }
    }


    /* =========================
       Menu Button
    ========================= */

    menuToggle.addEventListener(
        "click",
        toggleMenu
    );


    /* =========================
       Navigation Links
    ========================= */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");

            closeMenu();
        });

    });


    /* =========================
       Click Outside
    ========================= */

    document.addEventListener("click", (event) => {

        if (
            mainNav.classList.contains("open") &&
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            closeMenu();
        }

    });


    /* =========================
       Escape
    ========================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });


    /* =========================
       Close On Desktop
    ========================= */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 992) {

            closeMenu();

        }

    });

});