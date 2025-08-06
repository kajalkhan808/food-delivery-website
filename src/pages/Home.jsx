import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import categories from '../category'
import Card from '../components/Card'
import { food_items } from '../Food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
const Home = () => {
  let{cate,setcate,input,showCart , setshowCart}=useContext(dataContext)
  function filter(category){
    if (category==="All"){
      setcate(food_items)
    }else{
      let newList = food_items.filter((item)=>(item.food_category===category))
      setcate(newList)
    }

  }
  let items = useSelector(state=>state.cart)
  let subtotal = items.reduce((total , item)=>total+item.qty*item.price,0)
  let deliveryFee =20;
  let taxes = subtotal*0.5/100;
  let total = Math.floor(subtotal+deliveryFee+taxes)
  return (
    <div className='w-full min-h-screen bg-gray-100'>
      <Nav/>
      {input.trim() === "" ? (
  <div className='flex flex-wrap justify-center items-center gap-[15px]'>
    {categories.map((item) => (
      <div
        key={item.name}
        className='w-[130px] h-[140px] bg-white flex flex-col items-center justify-center gap-3 p-[10px]
        text-[17px] font-bold text-gray-600 rounded-md shadow-xl hover:bg-amber-100 cursor-pointer transition-all duration-200'
        onClick={() => filter(item.name)}
      >
        {item.icon}
        {item.name}
      </div>
    ))}
  </div>
) : null}
      <div className='w-full flex flex-wrap gap-5 items-center px-5 pt-8 justify-center'>
        {cate.length>1 ?cate.map((item)=>(
                <Card name={item.food_name} image={item.food_image} id={item.id} price={item.price} type={item.food_type} />
              )):<div className='text-center text-2xl text-amber-400 font-semibold' >no dish found</div>}
              
      </div>
      <div className={`w-[40%] h-[100%] fixed top-0 right-0 pb-8 bg-white shadow-2xl overflow-auto rounded-md transition-all flex flex-col items-center duration-500 ${showCart?"translate-x-0":"translate-x-full" } ` }>
        <header className='w-full flex justify-between items-center p-6  '>
          <span className='text-[18px] text-amber-500 font-semibold' >order items</span>
          <RxCross2 className='text-[20px] text-amber-500 font-semibold cursor-pointer hover:text-gray-700' onClick={()=>{
            setshowCart(false)
          }}/>

        </header>
                {
          (items.length>0?<>
        <div className='w-full mt-9 flex flex-col gap-8' >
          {items.map((item)=>(
            <Card2  name = {item.name} price = {item.price} image = {item.image} id = {item.id} qty = {item.qty}/>
          ))}
        </div>
        <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8' >
           <div className='w-full flex justify-between items-center' >
            <span className='text-lg font-semibold text-gray-600' >subtotal</span>
            <span className='text-lg font-semibold text-amber-500' > Rs {subtotal}/-</span>
           </div>
           <div className='w-full flex justify-between items-center' >
            <span className='text-lg font-semibold text-gray-600' >Delivery Fee</span>
            <span className='text-lg font-semibold text-amber-500' > Rs {deliveryFee}/-</span>
           </div>
           <div className='w-full flex justify-between items-center' >
            <span className='text-lg font-semibold text-gray-600' >Taxes</span>
            <span className='text-lg font-semibold text-amber-500' > Rs {taxes}/-</span>
           </div>
          
        </div>
        <div className='w-full flex justify-between items-center p-8' >
            <span className='text-xl font-semibold text-gray-600' >Total</span>
            <span className='text-xl font-semibold text-amber-500' > Rs {total}/-</span>
           </div>
         <button className='w-[80%] p-3 bg-amber-700 rounded-lg hover:bg-amber-400 transition-all text-white font-semibold'onClick={()=>{
          toast.success("Order Placed..")
         }}>Place Order</button>  
         </>:<div className='text-center text-2xl text-amber-400 font-semibold ' >Empty Cart</div>)
        }
        
      </div>
    </div>
  )
}

export default Home
