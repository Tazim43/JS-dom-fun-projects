const reset = () => {
  document.querySelector(".counter").innerHTML = "0";
};

const increase = () => {
  let data = document.querySelector(".counter").innerHTML;
  data = Number(data);
  document.querySelector(".counter").innerHTML = data + 1;
};

const decrease = () => {
  let data = document.querySelector(".counter").innerHTML;
  data = Number(data);
  document.querySelector(".counter").innerHTML = Math.max(data - 1, 0);
};
