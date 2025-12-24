import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx'
import { assets } from '../assets/frontend_assets/assets.js';
import RelatedProducts from '../components/RelatedProducts.jsx';

const Product = () => {

  const {productId} = useParams();
  const {products, currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  
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
      <div className='flex flex-col gap-12 sm:flex-row'>
        {/* ------------------------------ Product Images ---------------------------------*/}
        <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
          <div className='flex justify-between overflow-x-auto sm:flex-col sm:overflow-y-auto sm:justify-normal sm:w-[18.7%] w-full'>
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
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_icon} alt="" className="w-3.5" />
                <img src={assets.star_dull_icon} alt="" className="w-3.5" />
                <p className='pl-2'>(122)</p>
              </div>
              <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
              <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
              <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item,index)=> (
                    <button onClick={()=>setSize(item)} className={`border border-gray-200 py-2 px-4 bg-gray-100 ${item === size ? 'border-pink-500' : ''}`} key={index}>{item}</button>
                    
                  ))}
                </div>
              </div>
              <button className='px-8 py-3 text-sm text-white bg-black active:bg-gray-700'>ADD TO CART</button>
              <hr className='mt-8 border-gray-200 sm:w-4/5' />
              <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500 '>
                    <p>100% Orginal produt.</p>
                    <p>Cash on delivery is available on this product.</p>
                    <p>Easy return and exchange policy within 7 days.</p>
              </div>
              
            </div>
      </div>
      </div>

      {/*--------------Description & Review Section------------ */}
        <div className='mt-20'>
            <div className='flex '>
                  <b className='px-5 py-3 text-sm border border-gray-200'>Description</b>
                  <p className='px-5 py-3 text-sm border border-gray-200 '>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border border-gray-200'>
                  <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals con showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                  <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own. dedicated page with relevant information.</p>
            </div>
        </div>

        {/*------------------Display related products---------------- */}

        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0' />
}

export default Product
