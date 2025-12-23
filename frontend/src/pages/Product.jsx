import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx'

const Product = () => {

  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');


  
  const fetchProductData = async() => {

    products.map((item)=> {
      if(item._id === productId) {
         setProductData(item);
         setImage(item.image[0])
         return null;
      }
    })

  }

  useEffect(()=> {
    fetchProductData();
  },[productId, products])

  return productData ?  (
    <div className='pt-10 transition-opacity duration-500 ease-in border-t-2 border-gray-200 opacity-100'>
      {/* Product Data */}
      <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
        {/*  Product Images */}
        <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
          <div className='flex justify-between overflow-x-auto sm:flex-col sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=> (
                <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer'  alt="product_image" />
              ))
            }
          </div>
        </div>
      </div>
      
    </div>
  ) : <div className='opacity-0' />
}

export default Product
