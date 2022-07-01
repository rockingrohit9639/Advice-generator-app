const advice = document.querySelector("#advice");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  updateQuote();
});

const updateQuote = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await res.json();

    advice.innerHTML = slip.advice;
  } catch (err) {
    console.log(err);
  }
};

updateQuote();
