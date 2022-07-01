const advice = document.querySelector("#advice");
const button = document.querySelector("#button");
const aid = document.querySelector("#aid");

button.addEventListener("click", () => {
  updateQuote();
});

const updateQuote = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await res.json();
    advice.innerHTML = slip.advice;
    aid.innerHTML = slip.id;
  } catch (err) {
    console.log(err);
  }
};

updateQuote();
