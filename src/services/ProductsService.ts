import axios from 'axios';

const ProductsService = {
    getProducts: () => {

        return axios.get('https://raw.githubusercontent.com/SilviaCastroCaamano25/react-tuto/develop/data.json');

    }
};

export default ProductsService;