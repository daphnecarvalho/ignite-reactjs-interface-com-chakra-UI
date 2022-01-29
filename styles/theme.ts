import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '500': '#999999',
      '600': '#47585B',
      '200': '#DADADA',
      '100': '#e7e7e7',
      '50': '#F5F8FA'
    },
    yellow: {
      '500': '#FFBA08'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.50',
        color: 'gray.600',
      }
    }
  }
});