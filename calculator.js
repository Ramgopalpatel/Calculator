let result = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      result = eval(result);
      document.querySelector("input").value = result;
    } else if (e.target.innerHTML == "C") {
      result = "";
      document.querySelector("input").value = result;
    } else if (e.target.innerHTML == "X") {
        let num=document.querySelector("input").value= result.slice(0, -1);
        result=num;
    } else {
      result = result + e.target.innerHTML;
      document.querySelector("input").value = result;
    }
  });
});
