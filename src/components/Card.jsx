import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';



const Card = ({name,image,id,price,type }) => {
  let  dispatch = useDispatch();
  return (
    <div className='w-[300px] h-[400px] bg-white rounded-lg p-2.5 flex flex-col gap-2 shadow-lg hover:border-2 border-amber-400'>
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
        <img  src={image} alt=""  className=' w-full h-full object-cover'/>
      </div>
      <div className=' text-xl font-semibold'>
        {name}
      </div>
      <div className=' w-full flex justify-between items-center'>
        <div className='text-amber-500 text-lg  font-bold' >{price}/-</div>
        <div className='flex justify-between items-center text-amber-500 text-lg font-semibold gap-2'>{type=="veg" ? <LuLeafyGreen/> : <GiChickenOven />}<span>{type}</span> </div>
 
      </div>
      <div>
        <button
  className='w-full p-2 bg-amber-700 rounded-lg hover:bg-amber-400 transition-all text-white font-semibold'
  onClick={() => {dispatch(AddItem({ id, name, image, price, qty :1}))
       toast.success("item added")}
  }>
  Add to dish
</button>

      </div>
    </div>
  )
}

export default Card