import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";

const Configration = ({isOpen, isClose, sendData}) => {
  const[mydata, setMydata] = useState({
    //  buttonname: '',
     height:'',
     width:'',
     color:'#ffffff',
     gridcol:'',
     gridrow:'',
     conname:''
  });

  const[data,setData] = useState([]);

  if(!isOpen){
        return null;
  }

  const dataHandler = (e) => {
    setMydata({
            ...mydata,
            [e.target.name] : e.target.value
      });
  }  

  const createHtml = (e) => {
    e.preventDefault();
    setData([...data, mydata]);
    sendData([...data, mydata]);
    console.log("in submit" ,data)
    isClose();
    setMydata({
      height:'',
      width:'',
      color:'#ffffff',
      gridcol:'',
      gridrow:'',
      conname:''
    })
  }  

  return (
    <div className='fixed bottom-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center'>
        <div className='w-[600px] h-[fit bg-white rounded-lg py-4'>
           <div className='w-full flex justify-between items-center px-3'>
                 <h1 className='text-lg font-medium'>Please fill all the configration details</h1>
                 <IoCloseOutline  onClick={isClose}  className='text-3xl text-slate-400 m-2 cursor-pointer'/>
           </div>
           
           <form onSubmit={createHtml}>

                {/* Button form */}

                {/* <div className='p-3 flex flex-col gap-6 mt-5'>
                    <label>Button Name: <input type='text' className='bg-slate-200 ml-2 py-2 px-2 outline-none rounded-md' name='buttonname' value={mydata.buttonname} onChange={dataHandler}/></label>
                    <label className='flex gap-5'>Button Type: 
                        <input type='radio' name='btntype'/><label>Hide</label> 
                        <input type='radio' name='btntype'/><label>Unhide</label> 
                    </label>
                    <label className='flex gap-5 mt-2'>Button Size: 
                        <input type='number'className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' /><label>Width (px) </label> 
                        <input type='number'className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' /><label>Height (px) </label> 
                    </label>
                </div> */}

                {/* Containerform */}

                <div className='p-3 flex flex-col gap-7 mt-5'>
                  <label>Container Name : <input type='text' className='bg-slate-200 w-[200px] py-1 px-2 rounded-md outline-none' name='conname' value={mydata.conname} onChange={dataHandler} /></label>
                  <div className='flex gap-6'>
                    <label>Height : <input type='number' min="100" className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' name='height' value={mydata.height} onChange={dataHandler} /></label>
                    <label>Width : <input type='number' min="100" className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' name='width' value={mydata.width} onChange={dataHandler}/></label>
                    <label>Background Color : <input type='color' className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' name='color' value={mydata.color} onChange={dataHandler}/></label>
                  </div>
                  <div className='flex gap-6'>
                    <label>Grid Columns : <input type='nymber' className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' name='gridcol' value={mydata.gridcol} onChange={dataHandler}/></label>
                    <label>Grid Rows : <input type='nymber' className='bg-slate-200 w-[60px] py-1 px-2 rounded-md outline-none' name='gridrow' value={mydata.gridrow} onChange={dataHandler}/></label>
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