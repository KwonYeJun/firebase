const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A fresh start will put you on your way.",
    "A friend asks only for your time not your money.",
    "A friend is a present you give yourself.",
    "A good time to finish up old tasks.",
    "A hunch is creativity trying to tell you something.",
    "A lifetime of happiness lies ahead of you.",
    "A light heart carries you through all the hard times."
];

const fortuneButton = document.getElementById('fortune-button');
const fortuneText = document.getElementById('fortune-text');

fortuneButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneText.textContent = fortunes[randomIndex];
});