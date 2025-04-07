function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const mins = now.getMinutes().toString().padStart(2, "0");
    const secs = now.getSeconds().toString().padStart(2, "0");
    const separator = now.getSeconds() % 2 === 0 ? ":" : " ";
    document.getElementById("clock").textContent = `${hours}${separator}${mins}${separator}${secs}`;
  }
  setInterval(updateClock, 1000);
  updateClock();

  let countdownInterval;

function setCountdown() {
  const input = prompt("Введіть дату та час завершення (формат: РРРР-ММ-ДД ГГ:ХХ):", "2025-04-10 14:00");
  const endTime = new Date(input);
  if (isNaN(endTime)) return alert("Невірний формат дати!");

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = endTime - now;
    if (diff <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").textContent = "⏰ Час вийшов!";
    } else {
      const hours = Math.floor(diff / 1000 / 60 / 60);
      const mins = Math.floor((diff / 1000 / 60) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      document.getElementById("countdown").textContent = `Залишилось: ${hours} год ${mins} хв ${secs} сек`;
    }
  }, 1000);
}

  function calcBirthday() {
    const input = prompt("Введіть дату народження (формат: ММ-ДД):", "08-12");
    if (!input) return;
    const [month, day] = input.split("-").map(Number);
    const now = new Date();
    let birthday = new Date(now.getFullYear(), month - 1, day);
  
    if (birthday < now) birthday.setFullYear(now.getFullYear() + 1);
  
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
  
    document.getElementById("birthdayOutput").textContent = 
      `До дня народження: ${days} днів , ${hours} год, ${mins} хв, ${secs} сек`;
  }
  