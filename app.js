const input = document.querySelector(".input");
const output = document.querySelector(".output");
const equalBtn = document.querySelector(".equal");
const cancelBtn = document.querySelector(".cancel");
const before = document.querySelector(".before");

equalBtn.addEventListener("click", function () {
  let mat = input.value;

  // I did it by taking the value of my input and simply eval it. But then I couldn't transform error into my visual error. So I just found the solution at web

  Math.eval = function (str) {
    for (var i = 0; i < str.length; i++) {
      if (isNaN(str[i]) && !["+", "-", "/", "*", "%", "**"].includes(str[i])) {
        return NaN;
      }
    }

    try {
      return eval(str);
    } catch (e) {
      if (e.name !== "SyntaxError") throw e;
      return NaN;
    }
  };

  let doit = Math.eval(mat);

  // above before my comment - not my code

  if (doit) {
    output.textContent = Math.eval(mat);
    equalBtn.classList.add("done");
  } else if (doit !== isNaN) {
    before.style.visibility = "visible";
    output.textContent = "";
  }

  setInterval(() => {
    before.style.visibility = "hidden";
    equalBtn.classList.remove("done");
  }, 1500);
});

cancelBtn.addEventListener("click", function () {
  cancelBtn.classList.add("done");
  input.value = "";
  output.textContent = "";
  before.style.visibility = "hidden";
  equalBtn.classList.remove("done");
  setInterval(() => {
    cancelBtn.classList.remove("done");
  }, 1500);
});
