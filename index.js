const images = [
    "img1.webp",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg"
];
let crrIndex = 0;

function openbox(index) {
    crrIndex = index;
    const box = document.getElementById('box');
    const boxImg = document.getElementById('box-img');
    box.style.display = 'flex';
    box.style.zIndex = '1';
    boxImg.style.width = '600px';
    boxImg.style.height = '500px';
    boxImg.src = images[crrIndex];
}

function closebox() {
    const box = document.getElementById('box');
    box.style.display = 'none';
}

function nextImage() {
    crrIndex = (crrIndex + 1) % images.length;
    document.getElementById('box-img').src = images[crrIndex];
}

function prevImage() {
    crrIndex = (crrIndex - 1 + images.length) % images.length;
    document.getElementById('box-img').src = images[crrIndex];
}
