module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  mode: 'jit',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'base-tan': '#F5E9D6',
        'normal-tan': '#dec9a9',
        rust: '#AE5222',
        mustard: '#D2964A',
        mint: '#a6bd88',
        sage: '#738062',
        'light-gray': '#757572',
        'off-white': '#c8c8c8',
        'transparent-off-white': 'rgba(200, 200, 200, 0.4)',
        gray: '#868682',
        'dark-blue': '#2B3A67',
        'baby-blue': '#539ec3',
        'deep-gray': '#1A1818',
      },
      height: {
        'screen-3rem': 'calc(100vh - 3rem)',
        'screen-1rem': 'calc(100vh - 1rem)',
        '90-screen': '90vh',
        '70-screen': '70vh',
        'half-screen': '50vh',
        '30-screen': '30vh',
        '20-screen': '20vh',
        drawing: '375px',
        'mini-drawing': '125px',
      },
      width: {
        'base-nav': '56px',
        nav: '77px',
        drawing: '375px',
        'mini-drawing': '125px',
      },
      fontSize: {
        xxs: '11px',
        '8.5xl': '7rem',
        '4.5xl': '4.5rem',
        'fluid': `clamp(1rem, 5vw, 4.5rem)`,
        'mid-fluid': `clamp(1rem, 7vw, 5rem)`,
        'mobile-fluid': `clamp(1rem, 11vw, 6rem)`,
        'heading-fluid': `clamp(1rem, 18vw, 8rem)`
      },
      letterSpacing: {
        'ultra-wide': '0.15em',
        'ultra-wider': '0.25em',
        stretch: '0.5em',
      },
      lineHeight: {
        11: '3rem',
        12: '4rem',
        13: '5rem',
      },
      fontFamily: {
        'la-belle': ['la-belle'],
        'gotham-black': ['gotham-black'],
        'gotham-bold': ['gotham-bold'],
        'gotham-book': ['gotham-book'],
        'gotham-light': ['gotham-light'],
        'gotham-medium': ['gotham-medium'],
        'dream-ave': ['dream-ave'],
        montserrat: ['Montserrat'],
      },
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
        2500: '2500ms',
        3000: '3000ms',
      },
      translate: {
        '-7rem': '-7rem',
        '-1/2': '-50%',
        0: '0',
      },
      transform: {
        'footer-hidden': 'translateY(100%)',
      },
      maxWidth: {
        5: '5.25rem',
      },
      transitionProperty: {
        'max-w': 'max-width',
      },
    },
    screens: {
      '4xs': '250px',
      '3xs': '335px',
      xxs: '375px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1167px',
      mxl: '1280px',
      '2xl': '1425px',
      '3xl': '1536px',
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover'],
      scale: ['hover', 'group-hover'],
      animation: ['hover', 'group-hover'],
      translate: ['hover'],
      grayscale: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
