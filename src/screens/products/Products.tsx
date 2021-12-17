import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/counter/Counter';
import useStyles from './products-styles'
import ProductsService from '../../services/ProductsService';
import { Skeleton } from '@mui/material';
import ProductItem from '../../components/product-item/ProductItem';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const classes = useStyles();

  const onClickButton = () => {
    navigate('details');
  };

  useEffect(() => {
    async function asyncCall() {
      //console.log('calling');
      const result = await ProductsService.getProducts();
      setProducts(result.data);
      // expected output: "resolved"
    }

    asyncCall();

  }, []);

  console.log('products: ', products);

  if (products.length === 0) {
    return <h1>Cargando</h1>;
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {/* <Typography className={classes.h1}>Soy la página de productos</Typography>*/}
      </div>
      <div className={classes.productsContainer}>
        {products.map((item) => {
          return <ProductItem product={item} />;
        })}
      </div>
      {/*<Counter></Counter>
      <Skeleton variant="rectangular" style={{ width: '175px', height: '10px', position: 'absolute', top: '58%', backgroundColor: 'lightgray' }} />
      <Button className={classes.button} onClick={onClickButton}>Ve a la página de detalles</Button>*/}
    </div>
  );
};

export default Products;
