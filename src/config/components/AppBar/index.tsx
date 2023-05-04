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
      justifyContent: 'center'
    }}>
      <AppBar position="static" sx={{
        backgroundColor: 'transparent',
        width: '1120px',
      }}>
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center'
        }}>
          <Typography 
            variant="h4" 
            component="div" 
            color='black'
          >
            Grow Dev
          </Typography>
          <Box sx={{
            display: 'flex'
          }}>
            <Box>
              <Button 
                color="primary"
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
                color="primary"
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
