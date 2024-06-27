import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add } from '../../Store/buttonSlice';

const NewPage = ({buttonSend, tooldataArray, toggleSidebar}) => {

  const dispatch = useDispatch();
  const fetchedData = useSelector(state => state.button);


  console.log("toodata" + tooldataArray);
  if(!buttonSend && tooldataArray.length === 0){
    return null;
  }

  const buttonProperty= {
    name: "button",
    bgcolor: "blue",
    textcolor:"white",
    width: "90px",
    height:"40px",
    font:"16px",
  } 

  const addButtonredux = ()=>{
  dispatch(add(buttonProperty));
  toggleSidebar()
  }

  const renderContent = (tooldata, index) => {
    switch (tooldata) {
      case 'heading':
        console.log("h" + tooldata);
        return (
          <div key={index} className='mt-2 cursor-pointer' onClick={toggleSidebar}>
            <h1 className='text-xl'>Heading</h1>
          </div>
        );
      case 'button':
        return (
          <button key={index} onClick={addButtonredux} className='bg-blue-600 text-white w-[90px] h-[40px] text-[16px] rounded-lg mr-4'>
            {fetchedData[0]?.name||buttonProperty.name}
          </button>
        );
      case 'input':
        return (
          <div key={index} onClick={toggleSidebar} className='flex gap-5 mt-2 cursor-pointer'>
            <label>Label:</label>
            <input type='text' placeholder='Text' className='border border-slate-400 px-1' />
          </div>
        );
      case 'textarea':
        return <textarea key={index} className='border border-slate-400 px-1' placeholder='Text Area'></textarea>;
      case 'label':
        return <label key={index}>Label</label>;
      default:
        return null;
    }
  };
  
  return (
    <>
    
      {/* {
      buttonSend.map((button, index) => (
        <>
        <button key={index} className='bg-blue-600 text-white px-4 py-2 rounded-lg mr-4'>
          {button.buttonname || 'Button'} 
        </button>

        </>
      ))} */}

      {tooldataArray.map((tooldata, index) => renderContent(tooldata, index))}
    
      

     {
      buttonSend.map((item,index) => ( 
        <div key={index} 
        style={{ backgroundColor: item.color, height: item.height+'px',
                 width: item.width+'px', boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                 margin:'20px 20px', display:'grid', gridTemplateColumns: `repeat(${item.gridcol}, 1fr)`,
                 gridTemplateRows: `repeat(${Math.ceil(item.length / item.gridcol)}, auto)`,
                 gap: '1rem',
                 padding: '1rem',
                //  borderRadius: '0.5rem',
                 overflow: 'hidden'
               }}>
                
          <h1 className='text-2xl text-black w-fit'>Hello</h1>
          <h1 className='text-2xl text-black w-fit'>ravi</h1>
          {/* <h1 className='text-2xl text-black w-fit'>Hello</h1>
          <h1 className='text-2xl text-black w-fit'>ravi</h1>
          <h1 className='text-2xl text-black w-fit'>Hello</h1>
          <h1 className='text-2xl text-black w-fit'>Hello</h1>
          <h1 className='text-2xl text-black w-fit'>ravi</h1>
          <h1 className='text-2xl text-black w-fit'>Hello</h1>
          <h1 className='text-2xl text-black w-fit'>ravi</h1>
          <h1 className='text-2xl text-black w-fit'>Hello</h1> */}
   
        </div>
      ))


      }

     


     

    </>
  )
}

export default NewPage;