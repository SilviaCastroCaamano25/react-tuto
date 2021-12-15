import { makeStyles } from '@mui/styles';
//import theme from '../../theme';

const useStyles: any = makeStyles({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'baseline',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '20 auto',
        padding: '20 auto',
        alignContent: 'center',
        top: '50%',
        position: 'absolute'
    },

    button: {
        fontSize: '20px !important',
        color: '#5c0e00'
    }
});

export default useStyles;