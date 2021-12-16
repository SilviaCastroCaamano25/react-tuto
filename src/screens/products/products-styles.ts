import { LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
//import theme from '../../theme';

const useStyles: any = makeStyles({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    h1: {
        position: 'absolute',
        top: '15%',
        left: '40%',
        fontSize: '24px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        textDecoration: '2px underline black',

    },

    button: {
        position: 'absolute',
        top: '25%',
        left: '43%',
        fontSize: '18px',
        textDecoration: '1px underline #5c0e00',
        color: '#5c0e00',
        textTransform: 'capitalize',
    },

});

export default useStyles;
