import React, { useContext } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from '../context/UserContext';
import { useEffect } from 'react';
import { food_items } from '../Food';
import { useSelector } from 'react-redux';




const Nav = () => {
  let{input , setInput, cate ,setcate , showCart , setshowCart} = useContext(dataContext)
  useEffect(()=>{
   let newList= food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
   setcate(newList)
  },[input])
    let items = useSelector(state=>state.cart)
  
  return (
    <div className='w-full h-[100px]  flex justify-between items-center px-8'>
      <div className='w-[55px] h-[55px] bg-white flex justify-center place-items-center rounded-md shadow-xl'>
        <MdFastfood  className='w-[25px] h-[25px]  text-amber-500' />
      </div>
      <form className='w-[70%] h-[55px] bg-white flex items-center px-5 gap-[15px] rounded-md shadow-md ' onSubmit={(e)=>e.preventDefault()}>
     <IoSearch className=' text-amber-500 w-[20px] h-[20px]' />
     <input type="text"  placeholder=' Search items.....' className=' w-full outline-none text-[20px]' 
      onChange={(e)=> setInput(e.target.value)} value={input} />
      </form>
      <div className='w-[55px] h-[55px] bg-white flex justify-center place-items-center rounded-md shadow-xl relative cursor-pointer
        ' onClick={()=>{
          setshowCart(true)
        }}>
      <span className='absolute top-0  right-2  text-amber-500 font-bold'>
  {Array.isArray(items) ? items.length : 0}
</span>

        <FiShoppingBag className='w-[25px] h-[25px]  text-amber-500' />

      </div>
    </div>
  )
}

export default Nav
