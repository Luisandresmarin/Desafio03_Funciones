
const ele1 = document.getElementById("ele1");

function pintar(color = 'green') {
    ele1.style.backgroundColor = color;
}

ele1.addEventListener("click", function() {
    pintar('yellow');
});

