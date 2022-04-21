let fonts = {
  'font-xxs': 1,
  'font-xs': 1.25,
  'font-sm': 1.75,
  'font-md': 2,
  'font-lg': 2.25,
  'font-xl': 2.5,
  'font-xxl': 3,
};

function increaseFont() {
  for (const i in fonts) {
    if (fonts[i] >= 3.5) return;
    fonts[i] = fonts[i] + 0.2;
    for (const element of document.querySelectorAll(`.${i}`)) {
      element.style.fontSize = `${fonts[i]}rem`;
    }
  }
}

function decreaseFont() {
  for (const i in fonts) {
    if (fonts[i] <= 0.8) return;
    fonts[i] = fonts[i] - 0.2;
    for (const element of document.querySelectorAll(`.${i}`)) {
      element.style.fontSize = `${fonts[i]}rem`;
    }
  }
}
