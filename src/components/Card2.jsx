// components/Card2.jsx
import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem, IncrementQty } from '../redux/cartSlice';

const Card2 = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(IncrementQty({ id, sign: '+' }));
  };

  const handleDecrease = () => {
    dispatch(IncrementQty({ id, sign: '-' }));
  };

  return (
    <div className='w-full h-[120px] shadow-lg flex justify-between'>
      <div className='w-[60%] h-full p-2 flex gap-5'>
        <div className='w-[50%] h-full overflow-hidden rounded-lg object-cover'>
          <img src={image} alt={name} />
        </div>
        <div className='w-[40%] h-full flex flex-col gap-3'>
          <div className='text-lg text-gray-700 font-semibold'>{name}</div>
          <div className='w-[110px] h-[50px] bg-slate-500 flex rounded-lg overflow-hidden shadow-lg text-amber-500 border-2 border-amber-400 font-semibold text-xl'>
            <button
              className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-300'
              onClick={handleDecrease}
            >
              -
            </button>
            <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>
              {qty}
            </span>
            <button
              className='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-300'
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start p-6 items-end gap-6'>
        <span className='text-amber-500 text-[18px] font-semibold'>Rs {price}/-</span>
        <RiDeleteBin6Line
          className='w-[30px] h-[30px] text-red-500 cursor-pointer'
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  );
};

export default Card2;
