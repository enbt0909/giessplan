document.addEventListener("DOMContentLoaded", () => {
  const potInput = document.getElementById("pot");
  const wattsInput = document.getElementById("watts");
  const litersRange = document.getElementById("litersRange");
  const flush = document.getElementById("flush");
  const interval = document.getElementById("interval");

  const calcBtn = document.getElementById("calc-btn");
  const resetBtn = document.getElementById("reset-btn");

  function recalc() {
    const pot = parseFloat(potInput.value);
    const watts = parseFloat(wattsInput.value);

    if (isNaN(pot) || isNaN(watts) || pot <= 0 || watts <= 0) {
      alert("Bitte gültige positive Werte eingeben!");
      return;
    }

    // Gießmenge: 20–25 % vom Volumen
    const minLit = (pot * 0.2).toFixed(1);
    const maxLit = (pot * 0.25).toFixed(1);
    litersRange.textContent = `${minLit}–${maxLit} L`;

    // Spülmenge: 3 × Volumen
    const flushLit = (pot * 3).toFixed(1);
    flush.textContent = `${flushLit} L`;

    // Intervall
    let low = 4, high = 6;
    if (watts >= 300) [low, high] = [3, 5];
    if (watts >= 600) [low, high] = [2, 4];
    interval.textContent = `${low}–${high} Tage`;

    // Werte speichern (optional)
    localStorage.setItem("pot", pot);
    localStorage.setItem("watts", watts);
  }

  function resetDefaults() {
    potInput.value = 40;
    wattsInput.value = 200;
    recalc();
  }

  calcBtn.addEventListener("click", recalc);
  resetBtn.addEventListener("click", resetDefaults);

  // Letzte Werte laden, falls vorhanden
  if (localStorage.getItem("pot")) potInput.value = localStorage.getItem("pot");
  if (localStorage.getItem("watts")) wattsInput.value = localStorage.getItem("watts");

  recalc();
});
