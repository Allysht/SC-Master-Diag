const page_btn = document.getElementsByClassName('service-li');
const content = document.getElementById('content');

function mainComponent() {
    content.style.backgroundImage = "url('../images/Circuit\ Board.svg')";
}

page_btn[1].addEventListener('click', () => {
    content.style.backgroundImage = "url('../images/service-si-diagnoza.jpg')";
})

page_btn[2].addEventListener('click', () => {
    content.style.backgroundImage = "url('../images/auto-soft.jpeg')";
})

page_btn[3].addEventListener('click', () => {
    content.style.backgroundImage = "url('../images/remap-ecu.jpg')";
})

page_btn[5].addEventListener('click', () => {
    content.style.backgroundImage = "url('../images/itp.jpg')";
})


page_btn[6].addEventListener('click', () => {
    content.style.backgroundImage = "url('../images/geometrie.jpg')";
})

mainComponent();