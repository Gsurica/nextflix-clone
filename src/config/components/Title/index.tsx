import { Typography } from '@mui/material'

export interface ITitle {
    variant: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2';
    children?: React.ReactNode,
    component?: any
}

const Title: React.FC<ITitle> = ({children, variant, component}) => {
    return (
        <Typography 
          variant={variant}
          component={component}
          color={'white'}
        >
           {children}
        </Typography>
    )
}

export default Title;