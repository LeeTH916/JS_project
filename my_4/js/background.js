const images = [
    "0.PNG",
    "1.PNG",
    "2.PNG"
];

const chosenImage = images[Math.floor(Math.random() * images.length )];

const bgImgae = document.createElement("img");
bgImgae.src = `images/${chosenImage}`;

document.body.appendChild(bgImgae);