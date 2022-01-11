import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductList = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchProducts());
        // eslint-disable-next-line
    }, [])

    
    return (
        <div className="bg-[#FAEDF0]">
            <ProductComponent />
        </div>
    )
}

export default ProductList

