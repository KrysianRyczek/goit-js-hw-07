const btn = document.querySelector("div > button.change-color")

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = (event) => {
  const element = document.querySelector("p > span")
  element.style.backgroundColor= getRandomHexColor()
}

btn.addEventListener("click", color)