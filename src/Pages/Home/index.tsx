import { Background } from "../../config/components/Background"
import Text from "../../config/components/Title"
import { Box, TextField, Button } from '@mui/material'

// Assista onde quiser. Cancele quando quiser.

// Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.

const Home = () => {
  return (
    <>
      <Background>
        <Box>
          <Text 
            variant='h3' 
            component={'h1'}
          > 
            Filmes, séries e muito mais, sem limites
          </Text>
          <Box sx={{
            width: '100%',
            textAlign: 'center'
          }}>
            <Text variant="h5" component={'p'} sx={{
              padding: '32px',
            }}>
              Assista onde quiser. Cancele quando quiser.
            </Text>
          </Box>
          <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center'
            }}>
            <Text variant="h6" component='h3'>
              Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
            </Text>
            <Box sx={{
              flexGrow: 1,
              display: 'flex',
              padding: '16px',
              width: '100%'
            }}>
              <TextField
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, .5)', 
                  color: 'white',
                  input: {color: 'white'},
                  width: '80%'
                }} 
                placeholder="E-mail"
                
              />
              <Button sx={{
                padding: '8px 16px 8px 16px',
                marginLeft: '4px',
                width: '20%'
              }}
              variant="contained">Vamos lá</Button>
            </Box>
          </Box>
        </Box>
      </Background>
    </>

  )
}

export { Home }
