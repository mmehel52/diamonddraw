const input = document.getElementById("number1");
const draw = document.getElementById("draw1");
const result = document.getElementById("result");

const starDiamond = function (x) {
  let arr = [];
  let str = "";
  for (let i = 0; i < 2 * x - 1; i++) {
    arr.push(" ");
  }

  let counter1 = x - 1;
  let counter2 = x - 1;

  for (let i = 0; i < x; i++) {
    arr[counter1] = "*";
    arr[counter2] = "*";
    console.log(arr.join(""));
    arr[counter1] = " ";
    arr[counter2] = " ";
    counter1--;
    counter2++;
  }

  counter1 = 1;
  counter2 = 2 * x - 3;
  for (let i = 0; i < x - 1; i++) {
    arr[counter1] = "*";
    arr[counter2] = "*";
    console.log(arr.join(""));
    arr[counter1] = " ";
    arr[counter2] = " ";
    counter1++;
    counter2--;
  }
};

// starDiamond(6);

draw.addEventListener("click", () => {
  starDiamond(input.value);
});
