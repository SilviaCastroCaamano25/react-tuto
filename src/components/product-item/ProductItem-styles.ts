import { LinearProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
//import theme from '../../theme';

const useStyles: any = makeStyles({
    card: {
        width: '250px',
        backgroundColor: 'white',
        border: '1px, solid, gainsboro',
        margin: '10px',
    },

    imageContainer: {

    },
    image: {
        maxWidth: '230px',
        display: 'flex',
        alignItems: 'center',
    },

    ButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
    }

});

export default useStyles;