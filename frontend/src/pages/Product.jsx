import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx'
import { assets } from '../assets/frontend_assets/assets.js';

const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
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
      {/*--------------------------- Product Data---------------------------- */}
      <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
        {/* ------------------------------ Product Images ---------------------------------*/}
        <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
          <div className='flex justify-between overflow-x-auto sm:flex-col sm:overflow-y-scroll sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=> (
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer'  alt="product_image" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
              <img src={image} className='w-full h-auto' alt="image" />
          </div>
        </div>

        {/* -------------Product Info---------------------- */}
        <div className=''>
            <div className='flex-1'>
              <h1 className='mt-2 text-2xl font-medium'>{productData.name}</h1>
              <div className='flex items-center gap-1 mt-2'>
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
            </div>
        </div>

      </div>
    </div>
  ) : <div className='opacity-0' />
}

export default Product
