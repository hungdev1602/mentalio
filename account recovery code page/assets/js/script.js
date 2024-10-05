// Inputs only 1 value
const inputs = document.querySelectorAll('.recovery__input-code');
let currentInput = 0;

function nextInput() {
  const maxLength = 1;
  const input = inputs[currentInput];
  
  if (input.value.length === maxLength) {
    currentInput++;
    if(currentInput >= 4){
      input.blur();
      return;
    }
    inputs[currentInput].focus();
  }
}

inputs.forEach(input => {
  input.addEventListener('input', () => {
    console.log("ok")
    nextInput();
  });
});

// End Inputs only 1 value