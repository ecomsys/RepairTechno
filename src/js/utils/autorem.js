let globalScaleFactor = 1;

export function getScaleFactor() {
  return globalScaleFactor;
}

export default function initAutoRem({
  baseSiteWidth = 1536,
  baseFontSize = 16,
  auto = true,
  widthFactor = 1,
  edge = true,
  onUpdate
} = {}) {
  const htmlElement = document.documentElement;

  function updateFontSize() {
    const screenWidth = window.innerWidth;
    const scaleFactor = (screenWidth * widthFactor) / baseSiteWidth;

    //  старое поведение
    if (edge && screenWidth >= baseSiteWidth && auto) {
      globalScaleFactor = scaleFactor;

      const newFontSize = baseFontSize * scaleFactor;
      htmlElement.style.fontSize = `${newFontSize}px`;

      console.log("edge mode:", {
        screenWidth,
        scaleFactor
      });

      //  новое поведение (всегда масштаб)
    } else if (!edge) {
      globalScaleFactor = scaleFactor;

      const newFontSize = baseFontSize * scaleFactor;
      htmlElement.style.fontSize = `${newFontSize}px`;

      console.log("full scale mode:", {
        screenWidth,
        scaleFactor
      });

      // fallback (как было раньше)
    } else {
      globalScaleFactor = 1;
      htmlElement.style.fontSize = "1rem";

      console.log("adaptive mode:", {
        screenWidth
      });
    }

    if (onUpdate) {
      onUpdate(globalScaleFactor);
    }
  }

  window.addEventListener("resize", updateFontSize);
  updateFontSize();

  return {
    scaleFactor: globalScaleFactor,
    destroy: () => {
      window.removeEventListener("resize", updateFontSize);
    }
  };
}