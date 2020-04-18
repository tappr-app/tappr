export const size = {
    iPhone5: '320px',
    iPhone: '375px',
    iPhonePlus: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const device = {
    iPhone5: `(min-width: ${size.iPhone5})`,
    iPhone: `(min-width: ${size.iPhone})`,
    iPhonePlus: `(min-width: ${size.iPhonePlus})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };