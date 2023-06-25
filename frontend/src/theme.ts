import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  // WordPressテーマにCSSの優先度で負けてしまうため全てにimportantをつけている
  components: {
    Heading: {
      baseStyle: {
        margin: '0 !important',
        color: 'black !important',
        background: 'none !important',
        border: 'none !important'
      }
    },
    Text: {
      baseStyle: {
        margin: '0 !important',
        fontSize: '1rem !important'
      }
    }
  },
  colors: {
    tableHeader: '#EDF2F7',
    extendedTr: 'rgba(0, 0, 0, 0.06)'
  },
  styles: {
    global: () => ({
      body: {
        bg: null,
        color: null,
        fontSize: null,
        fontWeight: null,
        fontFamily: null
      }
    })
  }
})

export default theme
