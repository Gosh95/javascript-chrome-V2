const quotes = [
    {english: "I’ve failed over and over and over again in my life and that is why I succeed.",
     korean: "나는 인생에서 몇 번이고 반복해서 실패했고 그것이 내가 성공하는 이유이다.",
     author: "Michael Jordan"},
     
     {english: "Grind Hard, Shine Hard.",
     korean: "열심히 갈고, 열심히 빛납시다.",
     author: "Dwayne Johnso"},

     {english: "Just Do It.",
     korean: "그냥 해.",
     author: "Nike"},

     {english: "Begin Anywhere.",
     korean: "어디서든 시작해라.",
     author: "John Cage"},

     {english: "When something is important enough, you do it even if the odds are not in your favor.",
     korean: "어떤 일이 충분히 중요하다면, 가능성이 없어 보이더라도 해라.",
     author: "Elon Musk"},

     {english: "The rich invest in time, the poor invest in money.",
     korean: "부자는 시간에 투자하고, 가난한 사람은 돈에 투자한다.",
     author: "Warren Buffet"},

     {english: "If you can dream it, you can do it.",
     korean: "꿈을 꿀 수 있다면, 할 수 있습니다.",
     author: "Walt Disney"},

     {english: "There is no substitute for hard work.",
     korean: "노력을 대신할 수 있는 것은 없다.",
     author: "Thomas Edison"},

     {english: "If you want to be happy, be.",
     korean: "행복해 지고 싶다면 행복해져라.",
     author: "Leo Tolstoy"},

     {english: "To all my doubters, thank you very much. Because you guyes have also pushed me.",
     korean: "나를 의심했던 사람들에게 감사하다. 그들은 내가 빨리 달릴 수 있는 자극제가 되었다.",
     author: "Usain Bolt"},
];

const container = document.querySelector(".quotes");
const quoteEng = document.querySelector(".quotes p:first-child");
const quoteKor = document.querySelector(".quotes p:nth-child(2)");
const author = document.querySelector(".quotes p:last-child");

function changeQuotes() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quoteEng.innerText = randomQuote.english;
    quoteKor.innerText = randomQuote.korean;
    author.innerText = `-${randomQuote.author}`;
}

changeQuotes();
setInterval(changeQuotes, 30000);

