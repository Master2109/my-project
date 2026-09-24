(function () {
    const tfHamburger = document.getElementById('tfHamburger');
    const tfNavMenu = document.getElementById('tfNavMenu');

    if (tfHamburger && tfNavMenu) {
        // Function za kufunga menu ili kuzuia kurudia kodi (DRY)
        function closeMenu() {
            tfHamburger.classList.remove('tf-open');
            tfNavMenu.classList.remove('tf-show');
            tfHamburger.setAttribute('aria-expanded', 'false');
        }

        /* HAMBURGER TOGGLE */
        tfHamburger.addEventListener('click', function (event) {
            event.stopPropagation();
            tfHamburger.classList.toggle('tf-open');
            tfNavMenu.classList.toggle('tf-show');

            const isOpen = tfHamburger.classList.contains('tf-open');
            tfHamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        /* CLOSE WHEN CLICKING OUTSIDE */
        document.addEventListener('click', function (event) {
            if (!tfHamburger.contains(event.target) && !tfNavMenu.contains(event.target)) {
                closeMenu();
            }
        });

        /* CLOSE AFTER CLICKING A LINK */
        tfNavMenu.querySelectorAll('.tf-nav-links a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
    }
})();