import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const { title, image, description, category, price } = product;
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id && id !== "") dispatch(fetchProduct(id));
        return () => {
            dispatch(removeSelectedProduct())
        }
        // eslint-disable-next-line
    }, [id])

    return (
        <div className="flex flex-col justify-center items-center ">
            {
                Object.keys(product).length === 0 ?
                    (
                        <button type="button" className="bg-[#292C6D] w-24 h-12 flex justify-center items-center rounded-full" disabled>
                            <AiOutlineLoading3Quarters className="animate-spin text-center text-white text-3xl " />
                        </button>)
                    : (

                        <div className="w-full h-screen flex flex-col items-center justify-center ">
                            <img className="w-48 h-48 object-contain bg-white " src={image} alt={title} />
                            <div className="w-1/2 bg-[#292C6D] rounded-b-xl mt-6 ">
                                <p className="text-center text-[#FAEDF0] font-['Barlow'] text-md">
                                    {title}
                                </p>
                                
                                <p className="text-center text-[#FAEDF0] font-['Barlow'] text-md">
                                    {category.toUpperCase()}
                                </p>
                                <p className="text-center text-[#EC255A] font-['Orelega_One'] text-xl">
                                    ${price}
                                </p>
                                <p className=" bg-[#292C6D] text-[#FAEDF0] rounded-md p-4 text-center m-4">
                                    {description}
                                </p>
                            </div>
                        </div>



                    )
            }
        </div >
    )
}

export default ProductDetail