import { Box, Text, styled, keyframes } from '@ignite-ui/react'

const spinner = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },

  to: {
    transform: 'rotate(360deg)',
  },
})

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',

  '@media(max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },

  'svg[data-submitting="true"]': {
    color: '$ignite300',
    animation: `${spinner} 1.2s linear infinite`,
  },
})

export const FormAnnotation = styled('div', {
  marginTop: '$2',

  [`> ${Text}`]: {
    color: '$gray400',

    '&[data-error="true"]': {
      color: '#f75a68',
    },
  },
})
