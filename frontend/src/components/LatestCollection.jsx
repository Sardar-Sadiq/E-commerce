import React, { useContext, useEffect, useState } from 'react'

import { ShopContext } from '../context/ShopContext.js'
import Title from './Title.jsx';


const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProoducts, setLatestProducts] = useState([]);

    useEffect(()=> {
        setLatestProducts(products.slice(0,10));
    }, [])

  return (
    <div className='my-10'>
        <div className='py-8 text-3xl text-center'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nihil voluptatem modi quidem soluta asperiores odio, illo porro quia illum iure
            </p>
        </div>

    
    </div>
  )
}

export default LatestCollection




//1:18:31 time stop after we create compo which is used to display the product data