import { Button } from "@mui/material";
import Counter from "../counter/Counter";
import useStyles from "./ProductItem-styles";

const ProductItem = (props: any) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={props.product.image} />
            </div>
            <h3 className={classes.textName}>{props.product.name}</h3>
            {/***** }<Counter></Counter>*/}
            <div className={classes.buttonContainer}>
                <h3>{props.product.unitPrice}</h3>
                <Button>Añadir a la cesta</Button>
            </div>
        </div>
    );
};
export default ProductItem;