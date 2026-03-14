const container = document.querySelector(".container");
const btnReset = document.querySelector("#reset");
const btnResize = document.querySelector("#btn-resize");
const start = document.querySelector("#start");
const RGBcolor = document.querySelector("#btn-RGB");

let isActive = false;
let isRGB = false;

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const createGrid = (size) => {
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.className = "pixles";
    div.style.border = "1px solid black";
    div.style.flex = `0 0 ${100 / size}%`;
    div.style.aspectRatio = "1 / 1";
    div.style.boxSizing = "border-box";
    div.style.backgroundColor = "white";

    div.addEventListener("mouseover", () => {
      if (isActive) {
        div.style.backgroundColor = isRGB ? randomColor() : "red";
      }
    });

    container.appendChild(div);
  }

  btnReset.addEventListener("click", () => {
    document.querySelectorAll(".pixles").forEach((div) => {
      div.style.backgroundColor = "white";
    });
  });
};

createGrid(16);

start.addEventListener("click", () => {
  isActive = !isActive;
  start.textContent = isActive ? "STOP" : "START";
});

RGBcolor.addEventListener("click", () => {
  isRGB = !isRGB;
  RGBcolor.textContent = isRGB ? "RGB ON" : "RGB OFF";
});

btnResize.addEventListener("click", () => {
  let size = prompt("Enter the grid size max is 100:");
  size = parseInt(size);
  if (size > 100) size = 100;
  if (size < 1) size = 1;
  createGrid(size);
});
