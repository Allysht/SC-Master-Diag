const scrollel = document.getElementById('scroll');
const header = document.getElementById('scrollel');

scrollel.addEventListener('click', () => {
    header.style.transform = "translateY(-100%)";
});