import React, { useState } from 'react';
import { RxText } from "react-icons/rx";
import { RxButton } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { BsTextareaResize } from "react-icons/bs";
import { PiTextboxLight } from "react-icons/pi";
import { PiRectangleDashed } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
const Toolbar = ({openModel,sendData }) => {
  const[show, setShow] = useState(false);
  const[show2, setShow2] = useState(false);
  return (
    <div className='flex flex-col items-center'>
        <div className='text-center mt-5'>
            <h1 className='text-slate-900 py-4 text-4xl font-Lilita'>Partners Fund</h1>
        </div>

        {/* Layout */}
        <div  onClick={()=>setShow(!show)} className='flex bg-white w-[90%] py-3 justify-between items-center px-3 rounded-lg mt-9'>
          <h1>Layouts</h1>
          <p>
            <IoIosArrowDown style={{ transform: `rotate(${show ? 180 : 0}deg)`,transition: "all 0.25s",}}/>
          </p>
        </div>

        { show && 
        
        <div className='mx-5 flex gap-5 flex-wrap mt-[30px] justify-center'>
            <div className='flex flex-col py-4 w-[120px] items-center bg-white rounded-lg ' onClick={openModel}> 
               <PiRectangleDashed className='text-5xl text-slate-600'/>
               <h1 className='text-slate-600 mt-1'>Container</h1>
            </div>
            <div className='flex flex-col py-4 w-[120px] items-center bg-white rounded-lg ' onClick={openModel}> 
               <PiRectangleDashed className='text-5xl text-slate-600'/>
               <h1 className='text-slate-600 mt-1'>Navbar</h1>
            </div>
        </div>
        }

        {/* Elements */}
        <div onClick={()=>setShow2(!show2)} className='flex bg-white w-[90%] py-3 justify-between items-center px-3 rounded-lg mt-4'>
          <h1>Elements</h1>
          <p >
            <IoIosArrowDown style={{ transform: `rotate(${show2 ? 180 : 0}deg)`,transition: "all 0.25s",}}/>
          </p>
        </div>

        { show2 && 
            <div className='mx-5 flex gap-5 flex-wrap mt-[30px] justify-center'>
               <div className='flex flex-col py-3 w-[120px] items-center bg-white rounded-lg' onClick={()=>sendData('heading')}> 
                 <RxText className='text-5xl text-slate-600'/>
                 <h1 className='text-slate-600 mt-1'>Heading</h1>
               </div>
               <div className='flex flex-col py-3 w-[120px] items-center bg-white rounded-lg ' onClick={()=>sendData('button')}> 
                  <RxButton className='text-5xl text-slate-600'/>
                  <h1 className='text-slate-600 mt-1'>Button</h1>
               </div>
               <div className='flex flex-col py-4 w-[120px] items-center bg-white rounded-lg'  onClick={()=>sendData('input')}> 
                  <CiEdit className='text-5xl text-slate-600'/>
                  <h1 className='text-slate-600 mt-1'>Input Field</h1>
               </div>
               <div className='flex flex-col py-3 w-[120px] items-center bg-white rounded-lg '  onClick={()=>sendData('textarera')}> 
                  <BsTextareaResize className='text-5xl text-slate-600'/>
                  <h1 className='text-slate-600 mt-2'>Text Area</h1>
               </div>
               <div className='flex flex-col py-4 w-[120px] items-center bg-white rounded-lg'  onClick={()=>sendData('label')}> 
                  <PiTextboxLight className='text-5xl text-slate-600'/>
                  <h1 className='text-slate-600 mt-1'>Label</h1>
               </div>
            </div>
        }
         
    </div>
  )
}

export default Toolbar;