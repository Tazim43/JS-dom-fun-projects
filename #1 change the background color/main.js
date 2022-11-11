let btn = document.querySelector(".btn");

let r = 255,
  g = 255,
  b = 255;

let inp = document.getElementById("colorName");

let copy = document.getElementById("cpy");

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(inp.value);
  copy.innerText = "copied";
});

btn.addEventListener("click", () => {
  r = Math.floor(Math.random() * 255).toString(16);
  g = Math.floor(Math.random() * 255).toString(16);
  b = Math.floor(Math.random() * 255).toString(16);
  let color = `#${r}${g}${b}`;
  console.log(color);
  inp.value = color;
  copy.innerText = "copy";
  document.body.style.backgroundColor = color;
});
