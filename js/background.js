const imageWrap = document.querySelector("#img-wrap");

// 배경화면 랜덤 지정
// const images = ["0.jpg", "1.jpg", "2.jpg"];
// const chosenImgage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/0.jpg`;
bgImage.alt = "노란꽃들이 피여 있는 들판";
imageWrap.appendChild(bgImage);
