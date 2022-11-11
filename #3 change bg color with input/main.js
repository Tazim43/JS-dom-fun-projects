let btn = document.querySelector(".btn");

let r = 255,
  g = 255,
  b = 255;

let inp = document.getElementById("colorName");

let copy = document.getElementById("cpy");

let div = null;

// handling toast message
const handleToast = (colorName) => {
  if (div !== null) {
    div.remove();
  }
  div = document.createElement("div");
  div.className = "toast toast_in";
  div.innerHTML = `color ${colorName} copied!`;
  document.body.appendChild(div);

  div.addEventListener("click", () => {
    div.className = "toast toast_out";
    div.addEventListener("animationend", () => {
      div.remove();
    });
  });
};

copy.addEventListener("click", () => {
  if (isHexValid(inp.value)) {
    navigator.clipboard.writeText(inp.value);
    handleToast(inp.value);
  } else alert("Invalid color code");
});

btn.addEventListener("click", () => {
  r = Math.floor(Math.random() * 255).toString(16);
  g = Math.floor(Math.random() * 255).toString(16);
  b = Math.floor(Math.random() * 255).toString(16);
  let color = `#${r}${g}${b}`;
  inp.value = color;
  document.body.style.backgroundColor = color;
});

// working with input

/**
 *
 * @param {string} color
 */
let isHexValid = (color) => {
  let flag = 0;
  if (color[0] == "#" && (color.length == 7 || color.length == 4)) {
    for (let i = 1; i < color.length; i++) {
      if (color[i] >= "0" && color[i] <= "9") continue;
      if (color[i] >= "a" && color[i] <= "z") continue;
      if (color[i] >= "A" && color[i] <= "Z") continue;
      flag = 1;
    }
    if (flag === 1) return 0;
    return 1;
  }
};

let input = document.getElementById("colorName");

input.addEventListener("keyup", () => {
  let inputColor = input.value;
  if (isHexValid(inputColor)) {
    document.body.style.backgroundColor = inputColor;
  }
});
