// 4_Colores 
const caja1 = document.getElementById('caja1')
const caja2 = document.getElementById('caja2')
const caja3 = document.getElementById('caja3')
const caja4 = document.getElementById('caja4')

function pintar (negro) {
    negro.target.style.background = 'black';
}
caja1.addEventListener('click',pintar)
caja2.addEventListener('click',pintar)
caja3.addEventListener('click',pintar)
caja4.addEventListener('click',pintar)

