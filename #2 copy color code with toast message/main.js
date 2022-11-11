let btn = document.querySelector(".btn");

let r = 255,
  g = 255,
  b = 255;

let inp = document.getElementById("colorName");

let copy = document.getElementById("cpy");

let div = null;

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
  navigator.clipboard.writeText(inp.value);

  handleToast(inp.value);
});

btn.addEventListener("click", () => {
  r = Math.floor(Math.random() * 255).toString(16);
  g = Math.floor(Math.random() * 255).toString(16);
  b = Math.floor(Math.random() * 255).toString(16);
  let color = `#${r}${g}${b}`;
  console.log(color);
  inp.value = color;
  document.body.style.backgroundColor = color;
});
