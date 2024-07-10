import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { addCon } from '../../Store/containerSlice';

const Configration = ({isOpen, isClose}) => {

const dispatch = useDispatch();

if(!isOpen){
return null;
}

const createHtml = (e) => {
e.preventDefault();
isClose();
const formData = new FormData(e.target);
const {height ,width, color, gridcol, gridrow, conname} = Object.fromEntries(formData);
dispatch(addCon({height ,width, color, gridcol, gridrow, conname}));
} 

return (
<div className='fixed bottom-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center'>
<div className='w-[600px] h-[fit bg-white rounded-lg py-4'>
<div className='w-full flex justify-between items-center px-3'>
<h1 className='text-lg font-medium'>Please fill all the configration details</h1>
<IoCloseOutline onClick={isClose} className='text-3xl text-slate-400 m-2 cursor-pointer'/>
</div>

<form onSubmit={createHtml}>

{/* Containerform */}

<div className='p-3 flex flex-col gap-7 mt-5'>
<label>Container Name : <input type='text' className='bg-slate-200 w-[200px] py-1 px-2 rounded-md outline-none' name='conname' /></label>
<div className='flex gap-6'>
<label>Height : <input type='number' min="400" className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' name='height' /></label>
<label>Width : <input type='number' min="800" className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' name='width' /></label>
<label>Background Color : <input type='color' className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' name='color' defaultValue={'#ffffff'} /></label>
</div>
<div className='flex gap-6'>
<label>Grid Columns : <input type='nymber' defaultValue='4' className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' name='gridcol' /></label>
<label>Grid Rows : <input type='nymber' defaultValue='4' className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' name='gridrow' /></label>
</div>
</div>

<div className='p-3 mt-5 flex gap-3'>
<button className='bg-blue-600 text-white px-4 py-2 rounded-lg' type='submit'>Create</button>
<button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Reset</button>
</div>
</form>
</div>
</div>
)
}

export default Configration;