const questions = document.querySelectorAll(`.question`);
const arrows = document.querySelectorAll(`.arrow`);

questions.forEach((question, i) => {
  question.addEventListener(`click`, function () {
    this.classList.toggle(`active`);
    const answer = this.nextElementSibling;
    if (this.classList.contains(`active`)) {
      arrows[i].style.transform = `rotate(180deg)`;
      answer.classList.remove(`hidden`);
    } else {
      arrows[i].style.transform = `rotate(0deg)`;
      answer.classList.add(`hidden`);
    }
  });
});
