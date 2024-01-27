const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


        var MainImg = document.getElementById("MainImg");
        var smallimg = document.getElementByClassName("small-img");

        smallimg[0].onclick = function(){
            MainImg.scr = smallimg[0].src;
        }

        smallimg[1].onclick = function(){
            MainImg.scr = smallimg[1].src;
        }

        smallimg[2].onclick = function(){
            MainImg.scr = smallimg[2].src;
        }   
        smallimg[3].onclick = function(){
            MainImg.scr = smallimg[3].src;
        }
