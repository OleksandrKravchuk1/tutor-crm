export const palette = {
  primary: {
    100: '#F2EFFF',
    200: '#E2DFFF',
    300: '#C3C0FF',
    400: '#A4A1FF',
    500: '#8582FF',
    600: '#6760FD',
    700: '#4D44E3',
    800: '#3323CC',
    900: '#1D00A5',
    950: '#0F0069',
  },
  secondary: {
    100: '#F1EFFF',
    200: '#E0E0FF',
    300: '#BDC2FF',
    400: '#9BA4FF',
    500: '#7C87F3',
    600: '#626DD7',
    700: '#4953BC',
    800: '#2F3AA3',
    900: '#131E8C',
    950: '#000767',
  },
  tertiary: {
    100: '#FFEDE6',
    200: '#FFDBCC',
    300: '#FFB695',
    400: '#FF8C54',
    500: '#E46F32',
    600: '#C3571A',
    700: '#A24000',
    800: '#7B2F00',
    900: '#571F00',
    950: '#351000'
  },
  neutral: {
    100: '#EAF1FF',
    200: '#D3E4FE',
    300: '#B7C8E1',
    400: '#9CACC5',
    500: '#8292AA',
    600: '#68788F',
    700: '#505F76',
    800: '#38485D',
    900: '#213145',
    950: '#0B1C30',
  },
}


export type Palette = typeof palette;
export type PaletteFamily = keyof Palette;
export type ColorShade = keyof Palette['primary'];