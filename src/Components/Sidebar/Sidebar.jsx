import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../Store/buttonSlice';

const Sidebar = ({ isOpen, closeSidebar, editingId, setTooldataArray }) => {
  const dispatch = useDispatch();
  const fetchedData = useSelector(state => state.button);


  console.log("sidebar data",fetchedData);
  const [formData, setFormData] = useState(() => {
    // Find the item in fetchedData that matches the editingId
    const editingItem = fetchedData.find(item => item.id === editingId);
    // Initialize formData with editingItem values if found, otherwise default values
    return {
      id: editingItem?.id || '',
      name: editingItem?.name || '',
      font: editingItem?.font || '',
      width: editingItem?.width || '',
      height: editingItem?.height || '',
      position: editingItem?.position || '',
      enabled: '',
      displayed: '',
      onclick: '',
      hint: '',
      query: '',
      row: editingItem?.row || '',
      col: editingItem?.col || '',
      bgcolor: editingItem?.bgcolor || '#ffffff',
      textcolor: editingItem?.textcolor || '#ffffff',
      required: '',
      onchange: '',
      value: '',
      vobjname: '',
      vobjcol: '',
      eobjname: '',
      eobjcol: '',
      maxlength: '',
      alt: '',
      src: '',
    };
  });
  
  // Update formData.name when editingId changes
  useEffect(() => {
    const editingItem = fetchedData.find(item => item.id === editingId);
    if (editingItem) {
      setFormData(prevFormData => ({
        ...prevFormData,
        
      name: editingItem.name ,
      font: editingItem.font ,
      width: editingItem.width ,
      height: editingItem.height ,
      position: editingItem.position ,
      enabled: editingItem.enabled ,
      displayed: editingItem.displayed ,
      onclick: editingItem.onclick ,
      hint: editingItem.hint ,
      query: editingItem.query ,
      row: editingItem.row ,
      col: editingItem.col ,
      bgcolor: editingItem.bgcolor,
      textcolor: editingItem.textcolor,
      required: editingItem.required ,
      onchange: editingItem.onchange ,
      value: editingItem.value ,
      vobjname: editingItem.vobjname ,
      vobjcol: editingItem.vobjcol ,
      eobjname: editingItem.eobjname ,
      eobjcol: editingItem.eobjcol ,
      maxlength: editingItem.maxlength ,
      alt: editingItem.alt ,
      src: editingItem.src ,
        // Add other fields you want to update here if needed
      }));
    }
  }, [editingId, fetchedData]);

  const submitHandle = e => {
    e.preventDefault();
    dispatch(add(formData));
  };

  const handleReset = e => {
    e.preventDefault();
    setFormData({
      id: fetchedData[0]?.id || '',
      name: fetchedData[0]?.name || '',
      font: fetchedData[0]?.font || '',
      width: fetchedData[0]?.width || '',
      height: fetchedData[0]?.height || '',
      position: fetchedData[0]?.position || '',
      enabled: '',
      displayed: '',
      onclick: '',
      hint: '',
      query: '',
      row: fetchedData[0]?.row || '',
      col: fetchedData[0]?.col || '',
      bgcolor: '#ffffff',
      textcolor: '#ffffff',
      required: '',
      onchange: '',
      value: '',
      vobjname: '',
      vobjcol: '',
      eobjname: '',
      eobjcol: '',
      maxlength: '',
      alt: '',
      src: '',
    });
  };

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
            <input type='text' name='id' value={editingId} onChange={e => setFormData({ ...formData, id: e.target.value })} placeholder='product id' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='name'>name:</label>
            <input type='text' name='name' value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder='name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='font'>font size:</label>
            <input type='text' name='font' value={formData.font} onChange={e => setFormData({ ...formData, font: e.target.value })} placeholder='font size' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='width'>width:</label>
            <input type='text' name='width' value={formData.width} onChange={e => setFormData({ ...formData, width: e.target.value })} placeholder='width' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='height'>height:</label>
            <input type='text' name='height' value={formData.height} onChange={e => setFormData({ ...formData, height: e.target.value })} placeholder='height' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between'>
            <label htmlFor='bgcolor'>bg color:</label>
            <input type='color' name='bgcolor' value={formData.bgcolor} onChange={e => setFormData({ ...formData, bgcolor: e.target.value })} className='px-1 w-[190px] text-gray-800 rounded-md border-2' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='textcolor'>text color:</label>
            <input type='color' name='textcolor' value={formData.textcolor} onChange={e => setFormData({ ...formData, textcolor: e.target.value })} className='px-1 w-[190px] text-gray-800 rounded-md border-2' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='conname'>container name:</label>
            <input type='text' name='conname' value={formData.position} onChange={e => setFormData({ ...formData, position: e.target.value })} placeholder='container name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='row-col'>grid row/col:</label>
            <input type='text' name='row' value={formData.row} onChange={e => setFormData({ ...formData, row: e.target.value })} placeholder='grid row' className='w-[70px] px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
            <input type='text' name='col' value={formData.col} onChange={e => setFormData({ ...formData, col: e.target.value })} placeholder='grid col' className='w-[70px] px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label>enabled:</label>
            <select name='enabled' value={formData.enabled} onChange={e => setFormData({ ...formData, enabled: e.target.value })} className='px-1 w-[192px] outline-none rounded-md border-2 border-slate-200'>
              <option>--select--</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className='flex justify-between '>
            <label>displayed:</label>
            <select name='displayed' value={formData.displayed} onChange={e => setFormData({ ...formData, displayed: e.target.value })} className='px-1 w-[192px] outline-none rounded-md border-2 border-slate-200'>
              <option>--select--</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Button */}
          <div className='flex justify-between '>
            <label htmlFor='onclick'>onClick:</label>
            <input type='text' name='onclick' value={formData.onclick} onChange={e => setFormData({ ...formData, onclick: e.target.value })} placeholder='target location' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>

          {/* input */}
          <div className='flex justify-between '>
            <label htmlFor='hint'>hint:</label>
            <input type='text' name='hint' value={formData.hint} onChange={e => setFormData({ ...formData, hint: e.target.value })} placeholder='label name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between'>
            <label>required:</label>
            <div className='flex items-center w-[190px] gap-5'>
              <label htmlFor='required'><input type='radio' name='required' className='mr-1' />yes</label>
              <label htmlFor='required'><input type='radio' name='required' className='mr-1' />no</label>
            </div>
          </div>
          <div className='flex justify-between '>
            <label htmlFor='onchange'>onChange:</label>
            <input type='text' name='onchange' value={formData.onchange} onChange={e => setFormData({ ...formData, onchange: e.target.value })} placeholder='onchange location' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>

          <div className='flex justify-between '>
            <label htmlFor='value'>value/default value:</label>
            <input type='text' name='value' value={formData.value} onChange={e => setFormData({ ...formData, value: e.target.value })} placeholder='value / default value' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='vobjname'>view object name:</label>
            <input type='text' name='vobjname' value={formData.vobjname} onChange={e => setFormData({ ...formData, vobjname: e.target.value })} placeholder='view object name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='vobjcol'>view object column:</label>
            <input type='text' name='vobjcol' value={formData.vobjcol} onChange={e => setFormData({ ...formData, vobjcol: e.target.value })} placeholder='view object column' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='eobjname'>entity object name:</label>
            <input type='text' name='eobjname' value={formData.eobjname} onChange={e => setFormData({ ...formData, eobjname: e.target.value })} placeholder='entity object name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='eobjcol'>entity object column:</label>
            <input type='text' name='eobjcol' value={formData.eobjcol} onChange={e => setFormData({ ...formData, eobjcol: e.target.value })} placeholder='entity object column' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>

          {/* text area */}
          <div className='flex justify-between '>
            <label htmlFor='maxlength'>max length:</label>
            <input type='text' name='maxlength' value={formData.maxlength} onChange={e => setFormData({ ...formData, maxlength: e.target.value })} placeholder='max length' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>

          {/* image */}
          <div className='flex justify-between '>
            <label htmlFor='alt'>alt:</label>
            <input type='text' name='alt' value={formData.alt} onChange={e => setFormData({ ...formData, alt: e.target.value })} placeholder='image name' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>
          <div className='flex justify-between '>
            <label htmlFor='src'>src:</label>
            <input type='text' name='src' value={formData.src} onChange={e => setFormData({ ...formData, src: e.target.value })} placeholder='image link' className='px-1 ml-3 text-gray-800 outline-none rounded-md border-2 border-slate-200 placeholder:text-sm' />
          </div>

          <div className='flex gap-2 mt-3'>
            <button type='submit' className='rounded-md bg-slate-700 text-white px-3 py-1'>save</button>
            <button className='rounded-md bg-slate-700 text-white px-3 py-1' onClick={handleReset}>reset</button>
            <button type="button" className='rounded-md bg-slate-700 text-white px-3 py-1' onClick={() => { dispatch(remove(editingId)); setTooldataArray(prev => prev.filter(item => item.id !== editingId)) }}>delete</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Sidebar;
