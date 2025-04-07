const bulb = document.getElementById('bulb');
const toggleBtn = document.getElementById('toggleBtn');
const bulbType = document.getElementById('bulbType');
const brightnessBtn = document.getElementById('brightnessBtn');
const statusText = document.getElementById('statusText');

let isOn = false;
let brightness = 1;
let autoOffTimer;

toggleBtn.addEventListener('click', () => {
  isOn = !isOn;
  updateBulbState();
  resetAutoOffTimer();
});

bulbType.addEventListener('change', (e) => {
  bulb.classList.remove('regular', 'eco', 'led');
  bulb.classList.add(e.target.value);
  updateBulbState();
  resetAutoOffTimer();
});

brightnessBtn.addEventListener('click', () => {
  if (['eco', 'led'].includes(bulbType.value)) {
    const value = prompt('Введіть яскравість (1 - 100)', brightness * 50.0);
    if (value !== null) {
      brightness = parseFloat(value) / 50.0;
      updateBulbState();
    }
  } else {
    alert('Цей тип лампочки не підтримує зміну яскравості');
  }
  resetAutoOffTimer();
});

function updateBulbState() {
  bulb.classList.toggle('on', isOn);
  bulb.classList.toggle('off', !isOn);
  bulb.style.filter = isOn ? `brightness(${brightness})` : 'brightness(0.5)';
  toggleBtn.textContent = isOn ? 'Вимкнути' : 'Увімкнути';
  statusText.textContent = isOn ? 'Лампочка увімкнена' : 'Лампочка вимкнена';
}

function resetAutoOffTimer() {
  clearTimeout(autoOffTimer);
  autoOffTimer = setTimeout(() => {
    isOn = false;
    updateBulbState();
  }, 10000);
}

updateBulbState();
resetAutoOffTimer();
