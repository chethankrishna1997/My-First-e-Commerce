// sliding bar

const bar=document.getElementById("bar");
const navbar=document.getElementById("navbar");
const close=document.getElementById("close");

bar.addEventListener('click',() => {
    navbar.classList.add('active')
})

close.addEventListener('click',() => {
    navbar.classList.remove('active')
})


// singlepro

    var mainImg=document.getElementById("mainImg")
    var smallImg=document.getElementsByClassName("small-img1")

    smallImg[0].onclick= function()
    {
        mainImg.src = smallImg[0].src;
    }

    smallImg[1].onclick= function()
    {
        mainImg.src = smallImg[1].src;
    }

    smallImg[2].onclick= function()
    {
        mainImg.src = smallImg[2].src;
    }

    smallImg[3].onclick= function()
    {
        mainImg.src = smallImg[3].src;
    }
