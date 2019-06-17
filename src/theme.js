export const theme = {
  colors: {
    text: 'rgb(100,100,100)',
    background: '#fff',
    primary: '#fff',
    secondary: 'rgb(68,138,255)',
    tertiary: 'rgb(85,159,255)',
    highlight: '#c0f',
    gray: 'rgb(180,180,180)',
    today: 'rgb(39, 160, 140)',
    weekday: '#fff',
    modes: {
      Dark: {
        text: '#000',
        background: 'rgb(92, 92, 92)',
        primary: 'rgb(42, 42, 40)',        
        secondary: 'rgb(92, 92, 92)',
        tertiary: 'rgb(145, 145, 145)',
        highlight: '#c0f',
        gray: 'rgb(26, 26, 26)',
        today: 'rgb(22, 22, 22)',
        weekday: 'rgb(26,26,26)',
      }      
    }
  }
}

const breakpoints = ['540px']

breakpoints.lg = breakpoints[0]

export default {
  breakpoints,
}