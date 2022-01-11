import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (
            <Link to={`/product/${id}`} className="m-2 h-auto w-auto" key={id}>
                <div className="flex flex-col w-96 h-72 bg-white rounded-xl">
                    <div className="flex justify-center w-96 h-48">
                        <img className="w-48 h-48 object-contain " src={image} alt={title} />
                    </div>
                    <div className="w-96 h-24 bg-[#292C6D] rounded-b-xl mt-2 ">
                        <p className="text-center text-[#FAEDF0] font-['Barlow'] text-md">
                            {title}
                        </p>
                        <p className="text-center text-[#FAEDF0] font-['Barlow'] text-md">
                            {category.toUpperCase()}
                        </p>
                        <p className="text-center text-[#EC255A] font-['Orelega_One'] text-xl font-extralight">
                            ${price}
                        </p>
                    </div>
                </div>
            </Link>
        )


    })
    return <div className="flex flex-wrap justify-center">{renderList}</div>

}

export default ProductComponent

