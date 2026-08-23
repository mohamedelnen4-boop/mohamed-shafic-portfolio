document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    const navLinks = document.querySelectorAll(".main-nav a");

    // التأكد إن عناصر القائمة موجودة
    if (!menuToggle || !mainNav) {
        return;
    }

    // فتح وقفل القائمة
    menuToggle.addEventListener("click", (event) => {

        event.stopPropagation();

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    // عند الضغط على أي لينك
    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            // إزالة Active من كل الروابط
            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            // إضافة Active للرابط الحالي
            link.classList.add("active");

            // قفل القائمة
            mainNav.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    // قفل القائمة عند الضغط خارجها
    document.addEventListener("click", (event) => {

        const clickedInsideNav =
            mainNav.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            !clickedInsideNav &&
            !clickedToggle &&
            mainNav.classList.contains("open")
        ) {

            mainNav.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    // قفل القائمة بزر Escape
    document.addEventListener("keydown", (event) => {

        if (
            event.key === "Escape" &&
            mainNav.classList.contains("open")
        ) {

            mainNav.classList.remove("open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});