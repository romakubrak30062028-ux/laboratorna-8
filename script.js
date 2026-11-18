// Кав'ярня «Зерно» — інтерактивність сторінки
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');
    const toTop = document.querySelector('.back-to-top');

    // Темніша навігація та кнопка «Нагору» після прокручування
    const onScroll = () => {
        const scrolled = window.scrollY > 60;
        nav.classList.toggle('scrolled', scrolled);
        toTop.classList.toggle('show', window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    // Закриваємо мобільне меню після вибору пункту
    const offcanvasEl = document.getElementById('menuOffcanvas');
    offcanvasEl.querySelectorAll('.nav-link, .btn').forEach(link => {
        link.addEventListener('click', () => {
            const oc = bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (oc) oc.hide();
        });
    });

    // Мінімальна дата бронювання — сьогодні
    const date = document.getElementById('date');
    date.min = new Date().toISOString().split('T')[0];

    // Валідація форми бронювання засобами Bootstrap
    const form = document.getElementById('bookingForm');
    const toast = new bootstrap.Toast(document.getElementById('bookingToast'));
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }
        form.reset();
        form.classList.remove('was-validated');
        toast.show();
    });

    // Поточний рік у футері
    document.getElementById('year').textContent = new Date().getFullYear();
});
