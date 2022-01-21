const open_btn = document.getElementById('menu');
const close_btn = document.getElementById('close');
const menu = document.getElementById('ul-menu');

open_btn.addEventListener('click', () => {
    open_btn.style.display = "none";
    close_btn.style.display = "block";
    menu.style.display = "flex";
});

close_btn.addEventListener('click', () => {
    close_btn.style.display = "none";
    open_btn.style.display = "block";
    menu.style.display = "none";
});