import theme from 'styled-theming'

export const backgroundColor = theme('area', {
  Paris: 'linear-gradient(180deg, #C63D2B 0%, #DE5543 100%, #DE5543 100%);',
  '92/94': 'linear-gradient(180deg, #5D59D6 0%, #5D59D6 0.01%, #6F6BE6 100%);',
  '93': 'linear-gradient(180deg, #C63D2B 0%, #DE5543 100%, #DE5543 100%);',
  '77/91': 'linear-gradient(180deg, #5D59D6 0%, #5D59D6 0.01%, #6F6BE6 100%);',
  '78/95': 'linear-gradient(180deg, #C63D2B 0%, #DE5543 100%, #DE5543 100%);',
})

export const variables = {
  black: '#241F1F',
  opBlack: 'rgba(0, 0, 0, 0.35)',
  white: '#FFFFFF',
  grey: '#F3F3F3'
}
