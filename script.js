const header = document.getElementById('header');
const visib = document.querySelector('.korinmadi');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        header.classList.add('fixed')
        console.log('work')
    } else {
        header.classList.remove('fixed')
    }
});

function Toggle() {
    visib.classList.toggle('korindi')
}