const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const rockBtn = document.getElementById("rockBtn");
const pResultPara = document.getElementById("player-result");
const cResultPara = document.getElementById("computer-result");
const para = document.getElementById("para");
let i = 0;
let y = 0;

paperBtn.addEventListener("click", () => {
  let computerChoiceForPaper = Math.random();
  if (computerChoiceForPaper < 0.35) {
    para.innerHTML = "Paper win against rock, you win";
    i++;
    pResultPara.innerHTML = `Your score: ${i}`;
  } else if (computerChoiceForPaper > 0.35 && computerChoiceForPaper < 0.75) {
    para.innerHTML = "You and computer chose paper, draw";
  } else if (computerChoiceForPaper > 0.75 && computerChoiceForPaper < 1) {
    para.innerHTML = "Paper lose by scissors, you lost";
    y++;
    cResultPara.innerHTML = `Your score: ${y}`;
  }
});

rockBtn.addEventListener("click", () => {
  let computerChoiceForRock = Math.random();
  if (computerChoiceForRock < 0.35) {
    para.innerHTML = "Rock win against scissors, you win";
    i++;
    pResultPara.innerHTML = `Your score: ${i}`;
  } else if (computerChoiceForRock > 0.35 && computerChoiceForRock < 0.75) {
    para.innerHTML = "You and computer chose rock, draw";
  } else if (computerChoiceForRock > 0.75 && computerChoiceForRock < 1) {
    para.innerHTML = "Rock lose by paper, you lost";
    y++;
    cResultPara.innerHTML = `Your score: ${y}`;
  }
});

scissorsBtn.addEventListener("click", () => {
  let computerChoiceForScissors = Math.random();
  if (computerChoiceForScissors < 0.35) {
    para.innerHTML = "Scissors win against paper, you win";
    i++;
    pResultPara.innerHTML = `Your score: ${i}`;
  } else if (
    computerChoiceForScissors > 0.35 && computerChoiceForScissors < 0.75
  ) {
    para.innerHTML = "You and computer chose scissors, draw";
  } else if (
    computerChoiceForScissors > 0.75 && computerChoiceForScissors < 1
  ) {
    para.innerHTML = "Scissors lose by rock, you lost";
    y++;
    cResultPara.innerHTML = `Your score: ${y}`;
  }
});
