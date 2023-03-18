const clock = document.querySelector("#clock");

// setInterval(sayHello, 1000); // 몇초 마다 실행
// setTimeout(sayHello, 2000); // 몇초 후 실행

// console.log(new Date()); //Thu Mar 16 2023 21:15:37 GMT+0900 (한국 표준시)
// console.log(new Date().getDate()); // 16
// console.log(new Date().getHours()); // 21

// new Date().toLocaleTimeString();
// padStart는 꼭 string

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); // 새로고침하자마자 시간을 보이게 하기 위해 실행
setInterval(getClock, 1000);
