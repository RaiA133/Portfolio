const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements_left = document.querySelectorAll('.hidden-left');
hiddenElements_left.forEach((el) => observer.observe(el));

let prlx_y = document.getElementById('prlx_y');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    prlx_y.style.marginTop = value * 0.2 + 'px';
})