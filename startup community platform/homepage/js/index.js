document.querySelector('.photo').addEventListener('click', () => {
    document.querySelector('.photo').classList.add('active');
    document.querySelector('.round1').classList.remove('active');
    document.querySelector('.round2').classList.remove('active');

    let hide = document.getElementsByClassName('hide');
    for (var i = 0; i < hide.length; i++) {
        hide[i].style.display = 'none';
    }

    document.querySelector('.upload').style.display = 'flex';
    document.querySelector('.writePost').style.display = 'none';
})

document.querySelector('.round1').addEventListener('click', () => {
    document.querySelector('.photo').classList.remove('active');
    document.querySelector('.round1').classList.add('active');
    document.querySelector('.round2').classList.remove('active');

    let hide = document.getElementsByClassName('hide');
    for (var i = 0; i < hide.length; i++) {
        hide[i].style.display = 'block';
    }

    document.querySelector('.upload').style.display = 'none';
    document.querySelector('.writePost').style.display = 'none';
})

document.querySelector('.round2').addEventListener('click', () => {
    document.querySelector('.photo').classList.remove('active');
    document.querySelector('.round1').classList.remove('active');
    document.querySelector('.round2').classList.add('active');

    let hide = document.getElementsByClassName('hide');
    for (var i = 0; i < hide.length; i++) {
        hide[i].style.display = 'none';
    }

    document.querySelector('.upload').style.display = 'none';
    document.querySelector('.writePost').style.display = 'block';
})



var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

document.querySelector('.like').addEventListener('click', () => {
    document.querySelector('.fa-heart').classList.toggle('red');
})