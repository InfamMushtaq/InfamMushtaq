(function () {
    const btn = document.getElementById('scroll');
    if (!btn) return;

    const showThreshold = 200; // px to scroll before showing

    function onScroll() {
        if (window.scrollY > showThreshold) btn.classList.add('show');
        else btn.classList.remove('show');
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // optional: temporarily remove focus for keyboard users
        btn.blur();
    });

    // init state
    onScroll();
})();