import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../Store/buttonSlice';

const Sidebar = ({ isOpen, closeSidebar }) => {

  const fetchedData = useSelector(state => state.button);
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
     const formData = new FormData(e.target);
     const{id, name,font,width,height,position,enabled,displayed, onclick,hint,query,row,col} = Object.fromEntries(formData);
     dispatch(remove()); 
     dispatch(add(Object.fromEntries(formData))); 
  }
 
  return (
    <div className={`fixed top-0 right-0 h-full w-[380px] border-l bg-slate-100 border-gray-300 transition-transform  ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

      <div className='flex justify-between p-4'>
        <h1 className='text-xl font-medium'>Properties</h1>
        <IoIosArrowForward className='text-3xl cursor-pointefetchedDatar' onClick={closeSidebar} />
      </div>

      <form onSubmit={submitHandle} className='h-[calc(100%-72px)] overflow-y-auto p-1 flex flex-col gap-5'>
        <div className='p-4 flex flex-col gap-5'>
          <div className='flex justify-between'>
            <label htmlFor='id'>id:</label>
            <input type='text' name='id' value={fetchedData[0]?.id} placeholder='product id' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='name'>name:</label>
            <input type='text' name='name' defaultValue={fetchedData[0]?.name} placeholder='name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='font'>font size:</label>
            <input type='text' name='font' defaultValue={fetchedData[0]?.font} placeholder='font size' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='width'>width:</label>
            <input type='text' name='width' defaultValue={fetchedData[0]?.width} placeholder='width' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='height'>height:</label>
            <input type='text' name='height' defaultValue={fetchedData[0]?.height} placeholder='height' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between'>
            <label htmlFor='bgcolor'>bg color:</label>
            <input type='color' name='bgcolor' defaultValue='#ffffff'  className='px-1 w-[190px]  text-gray-800 rounded-md border-2'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='textcolor'>text color:</label>
            <input type='color' name='textcolor' defaultValue='#ffffff'  className='px-1 w-[190px]  text-gray-800 rounded-md border-2'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='conname'>container name:</label>
            <input type='text' name='conname' defaultValue={fetchedData[0]?.position} placeholder='container name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='row-col'>grid row/col:</label>
            <input type='text' name='row' defaultValue={fetchedData[0]?.row} placeholder='grid row' className='w-[70px] px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
            <input type='text' name='col' defaultValue={fetchedData[0]?.col} placeholder='grid col' className='w-[70px] px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label>enabled:</label>
            <select name='enabled' className='px-1 w-[192px] outline-none rounded-md border-2 border-slate-200'>
              <option>--select--</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='flex justify-between '>
            <label>displayed:</label>
            <select name='displayed' className='px-1 w-[192px] outline-none rounded-md border-2 border-slate-200'>
              <option>--select--</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Button */}
          <div className='flex justify-between '>
            <label htmlFor='onclick'>onClick:</label>
            <input type='text' name='onclick' placeholder='target location' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          
          {/* input */}
          <div className='flex justify-between '>
            <label htmlFor='hint'>hint:</label>
            <input type='text' name='hint' placeholder='label name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between'>
            <label>required:</label>
            <div className='flex items-center w-[190px] gap-5'>
              <label htmlFor='required'><input type='radio' name='required' className='mr-1'/>yes</label>
              <label htmlFor='required'><input type='radio' name='required' className='mr-1'/>no</label>
            </div>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='onchange'>onChange:</label>
            <input type='text' name='onchange' placeholder='onchange location' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>

          <div className='flex justify-between '>
            <label htmlFor='value'>value/default value:</label>
            <input type='text' name='value' placeholder='value / default value' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='vobjname'>view object name:</label>
            <input type='text' name='vobjname' placeholder='view object name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='vobjcol'>view object column:</label>
            <input type='text' name='vobjcol' placeholder='view object column' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='eobjname'>entity object name:</label>
            <input type='text' name='eobjname' placeholder='entity object name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='eobjcol'>entity object column:</label>
            <input type='text' name='eobjcol' placeholder='entity object column' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>

          
          {/* text area */}
          <div className='flex justify-between '>
            <label htmlFor='maxlength'>max length:</label>
            <input type='text' name='maxlength' placeholder='max length' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>




          {/* image */}
          <div className='flex justify-between '>
            <label htmlFor='alt'>alt:</label>
            <input type='text' name='alt' placeholder='image name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='src'>src:</label>
            <input type='text' name='src' placeholder='image link' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200  placeholder:text-sm'/>
          </div>

          <div className='flex gap-2 mt-3'>
            <button type='submit' className='rounded-md bg-slate-700 text-white px-3 py-1'>save</button>
            <button className='rounded-md bg-slate-700 text-white px-3 py-1'>reset</button>
            <button className='rounded-md bg-slate-700 text-white px-3 py-1'>delete</button>
          </div>
          
        </div>
      </form>  
    </div>
  );
};

export default Sidebar;