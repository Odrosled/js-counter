const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const resetButton = document.querySelector("#reset");
const output = document.querySelector("#output");

const setCounter = (value) => (output.innerText = value);

/**
 * Handler to increase or decrease counter based on type param.
 * @param {'increase'| 'decrease'} type
 * @returns
 */
const handler = (type) => {
  const counter = Number(output.innerText);
  const newValue = type == "increase" ? counter + 1 : counter - 1;
  if (newValue < 0) return;
  setCounter(newValue);
};

// EVENT LISTENERS

addButton.addEventListener("click", () => handler("increase"));
subtractButton.addEventListener("click", () => handler("decrease"));
resetButton.addEventListener("click", () => setCounter(0));
