const firstInput = document.querySelector("#first-input") as HTMLInputElement;
const secondInput = document.querySelector("#second-input") as HTMLInputElement ;
export  const screen = document.querySelector(".screen");
const btn = document.querySelector(".button"); 

function addNumbers(a: number, b: number){
    screen!.innerHTML = (a + b).toString();
}
btn?.addEventListener('click', () => addNumbers(parseInt(firstInput.value),
 parseInt(secondInput.value)));




