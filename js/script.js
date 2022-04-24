let fontLvl = 1;

function increaseFont() {
  const fonts = document.querySelectorAll('.dyn-font');
  if (fontLvl >= 3) return;
  fontLvl++;
  for (const i in fonts) {
    const element = fonts[i];
    if (typeof fonts[i] != 'object') return;
    const compStyles = window.getComputedStyle(element);
    const fs = compStyles.getPropertyValue('font-size');
    element.style.fontSize = `${parseFloat(fs) + 5}px`;
  }
}

function decreaseFont() {
  const fonts = document.querySelectorAll('.dyn-font');
  if (fontLvl <= 1) return;
  fontLvl--;
  for (const i in fonts) {
    const element = fonts[i];
    if (typeof fonts[i] != 'object') return;
    const compStyles = window.getComputedStyle(element);
    const fs = compStyles.getPropertyValue('font-size');
    element.style.fontSize = `${parseFloat(fs) - 5}px`;
  }
}
