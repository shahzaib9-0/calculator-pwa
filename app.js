const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Use Function constructor instead of eval for better security
    const result = Function('"use strict"; return (' + display.value + ')')();
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener('keydown', function(event) {
  const key = event.key;
  
  // Numbers and operators
  if (/[0-9+\-*/.()]/.test(key)) {
    appendValue(key);
  }
  // Enter key for calculate
  else if (key === 'Enter') {
    event.preventDefault();
    calculate();
  }
  // Backspace for delete last
  else if (key === 'Backspace') {
    event.preventDefault();
    deleteLast();
  }
  // Escape for clear
  else if (key === 'Escape') {
    clearDisplay();
  }
});

// Initialize display
display.value = "";

console.log('Calculator app loaded successfully');