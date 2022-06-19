export function toggleAnswer() {
  const cards = document.querySelectorAll("[data-js=card]");
  cards.forEach((card) => {
    const answerButton = card.querySelector("[data-js=show__answer]");
    const answer = card.querySelector("[data-js=answer]");
    answerButton.addEventListener("click", () => {
      answer.classList.toggle("hide");
      if (answer.classList.contains("hide")) {
        answerButton.innerText = "Show answer";
      } else {
        answerButton.innerText = "Hide Answer";
      }
    });
  });
}
