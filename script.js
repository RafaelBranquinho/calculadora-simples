// Exemplo simplificado da lógica JavaScript
const display = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
});