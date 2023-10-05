const bar=document.getElementById("bar");
const navbar=document.getElementById("navbar");
const close=document.getElementById("close");

bar.addEventListener('click',() => {
    navbar.classList.add('active')
})

close.addEventListener('click',() => {
    navbar.classList.remove('active')
})