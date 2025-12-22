import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { assets } from '../assets/frontend_assets/assets'
import ProductItem from '../components/ProductItem.jsx'

const Collection = () => {

const { products } = useContext(ShopContext);
const [showFilter, setShowFilter] = useState(false);

console.log(products);
  return (
    <div className='flex flex-col gap-1 pt-10 border-t border-gray-200 sm:flex-row sm:gap-10 '>
      {/* Filter Options */}

      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='flex items-center gap-2 my-2 text-xl cursor-pointer'>FILTERS</p>
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="dropdown_icon" />

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Men'} /> Men
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Women'} /> Women
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Kids'} /> Kids
                </p>
            </div>
        </div>

        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Topwear'} /> Topwear
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Bottomwear'} /> Bottomwear
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Winterwear'} /> Winterwear
                </p>
            </div>
        </div>


      </div>

    </div>
  )
}

export default Collection
