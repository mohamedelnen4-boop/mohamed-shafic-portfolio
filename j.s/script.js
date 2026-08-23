document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       GET HEADER
    =============================== */

    const header = document.querySelector("header");

    if (!header) {
        console.warn("Header not found");
        return;
    }


    /* ===============================
       GET / CREATE NAV
    =============================== */

    let mainNav =
        document.getElementById("mainNav") ||
        header.querySelector("nav");

    if (!mainNav) {
        console.warn("Navigation not found");
        return;
    }

    mainNav.id = "mainNav";
    mainNav.classList.add("main-nav");


    /* ===============================
       GET / CREATE MENU BUTTON
    =============================== */

    let menuToggle =
        document.getElementById("menuToggle");

    if (!menuToggle) {

        menuToggle =
            document.createElement("button");

        menuToggle.type = "button";

        menuToggle.id = "menuToggle";

        menuToggle.className = "menu-toggle";

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        header.appendChild(menuToggle);
    }


    /* ===============================
       NAV LINKS
    =============================== */

    const navLinks =
        mainNav.querySelectorAll("a");


    /* ===============================
       OPEN MENU
    =============================== */

    function openMenu() {

        mainNav.classList.add("open");

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );
    }


    /* ===============================
       CLOSE MENU
    =============================== */

    function closeMenu() {

        mainNav.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    /* ===============================
       TOGGLE MENU
    =============================== */

    menuToggle.addEventListener("click", (event) => {

        event.preventDefault();

        event.stopPropagation();

        const isOpen =
            mainNav.classList.contains("open");

        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }

    });


    /* ===============================
       NAVIGATION LINKS
    =============================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.forEach((item) => {

                item.classList.remove("active");

            });

            link.classList.add("active");

            closeMenu();

        });

    });


    /* ===============================
       CLICK OUTSIDE
    =============================== */

    document.addEventListener("click", (event) => {

        const clickedInsideNav =
            mainNav.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);

        if (
            mainNav.classList.contains("open") &&
            !clickedInsideNav &&
            !clickedMenuButton
        ) {

            closeMenu();

        }

    });


    /* ===============================
       ESC KEY
    =============================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });


    /* ===============================
       CLOSE ON RESIZE
    =============================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 992) {

            closeMenu();

        }

    });

});