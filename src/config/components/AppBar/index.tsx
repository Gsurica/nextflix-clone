import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ButtonAppBar = () => {
  return (
    <Box sx={{
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <AppBar position='fixed' sx={{
        backgroundColor: 'transparent',
        width: '1120px',
        zIndex: 999,
        margin: '10px auto',
        left: 0,
        right: 0,
      }}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center'
        }}>
          <Typography 
            variant="h4" 
            component="div" 
            color='red'
          >
            Grow Dev
          </Typography>
          <Box sx={{
            display: 'flex'
          }}>
            <Box>
              <Button 
                color="error"
                variant="contained"
              >
                Logar
              </Button>
            </Box>
            <Box
              sx={{
                marginLeft: '10px'
              }}
            >
              <Button
                color="error"
                variant="contained"
              >
                Entrar
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { ButtonAppBar }
