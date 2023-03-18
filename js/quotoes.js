const quotoe = document.querySelector("#quotoe p");
const author = document.querySelector("#quotoe span");
fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    const todayQuotoe = data[Math.floor(Math.random() * data.length)];
    quotoe.innerText = todayQuotoe.text;
    author.innerText = ` _ ${todayQuotoe.author}`;
  });

// #6.0 Quotes 강의 방법
// const quotoes = [
//   {
//     text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
//     author: "Thomas Edison",
//   },
//   { text: "You can observe a lot just by watching.", author: "Yogi Berra" },
//   {
//     text: "A house divided against itself cannot stand.",
//     author: "Abraham Lincoln",
//   },
//   {
//     text: "Difficulties increase the nearer we get to the goal.",
//     author: "Johann Wolfgang von Goethe",
//   },
//   { text: "Fate is in your hands and no one elses", author: "Byron Pulsifer" },
//   { text: "Be the chief but never the lord.", author: "Lao Tzu" },
//   { text: "Nothing happens unless first we dream.", author: "Carl Sandburg" },
//   { text: "Well begun is half done.", author: "Aristotle" },
//   {
//     text: "Life is a learning experience, only if you learn.",
//     author: "Yogi Berra",
//   },
//   {
//     text: "Self-complacency is fatal to progress.",
//     author: "Margaret Sangster",
//   },
// ];
// const quotoe = document.querySelector("#quotoe span:first-child");
// const author = document.querySelector("#quotoe span:last-child");
// const todayQuotoe = quotoes[Math.floor(Math.random() * quotoes.length)];
// quotoe.innerText = todayQuotoe.text;
// author.innerText = todayQuotoe.author;
