import React, { useState } from 'react'
import {useSelector} from 'react-redux'

const NewPage = ({ tooldataArray, toggleSidebar , nextId}) => {

  const fetchedData = useSelector(state => state.button);
  const contData = useSelector(state => state.container);
  console.log("button array:",fetchedData);
  console.log("container array:", contData) ; 



  const [isToggled, setIsToggled] = useState(false);
  const toggleButton = () => {
    setIsToggled(!isToggled);
  };

  console.log("tooldata" , tooldataArray);
  if(!contData && tooldataArray.length === 0){
    return null;
  }
  
  const buttonProperty= {
    id: nextId,
    name: "button",
    bgcolor: "blue",
    textcolor:"white",
    width: "90px",
    height:"40px",
    font:"16px",
    row:"1",
    col:"1"
  } 

  const addButtonredux = ()=>{
  // dispatch(add(buttonProperty));    //Update Redux 
  toggleSidebar();
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
        // const buttonStyle = {
        //   gridColumn: `${fetchedData[0]?.col || buttonProperty.col}`,
        //   gridRow: `${fetchedData[0]?.row || buttonProperty.row}`,
        //   width: `${fetchedData[0]?.width || buttonProperty.width}`,
        //   height: `${fetchedData[0]?.height || buttonProperty.height}`,
        // };
        return (
          <button key={index}  onClick={addButtonredux} className={`bg-blue-600 text-white w-[${fetchedData[0]?.width||buttonProperty.width}] w-[90px] h-[${fetchedData[0]?.height||buttonProperty.height}] h-[40px] text-[16px] rounded-lg mr-4`}
>
            {fetchedData[0]?.name||buttonProperty.name}
          </button>
        );
      case 'input':
        return (
          <div key={index} onClick={toggleSidebar} className='flex h-fit gap-5 mt-2 cursor-pointer'>
            <label>Label:</label>
            <input type='text' placeholder='Text' className='border border-slate-400 px-1' />
          </div>
        );
      case 'date':
        return ( 
              <div key={index} onClick={toggleSidebar} className='h-fit flex gap-5 mt-2 cursor-pointer'>
                  <input type='date' className='border border-slate-400 px-1' />
              </div>);
      case 'radio':
        return ( 
              <div className='flex gap-3 h-fit'>
                  <label>label:</label>
                  <div className='flex items-center w-[190px] gap-5'>
                    <label htmlFor='required'><input type='radio' name='required' className='mr-1'/>option 1</label>
                    <label htmlFor='required'><input type='radio' name='required' className='mr-1'/>option 2</label>
                  </div>
              </div>
              );
      case 'toggle':
        return (
              <div key={index} className='mt-2 cursor-pointer' onClick={toggleSidebar}>
                       <button
                        className={`relative rounded-full w-12 h-7 transition-colors duration-300 ${isToggled ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onClick={toggleButton}>
                        <span
                          className={`absolute left-1 top-1 inline-block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isToggled ? 'translate-x-5' : 'translate-x-0'}`}>
                        </span>
                      </button>
              </div>
              );
      case 'checkbox':
        return (
            <div key={index} className='flex flex-col' onClick={toggleSidebar}>
              <label htmlFor="op1"> <input type="checkbox" name='op1'/> Option 1</label>
              <label htmlFor="op2"> <input type="checkbox" name='op2'/> Option 2</label>
              <label htmlFor="op3"> <input type="checkbox" name='op3'/> Option 3</label>
            </div>
        );               
      case 'textarea':
        return (
                  <textarea key={index} className='border h-fit border-slate-400 px-1' placeholder='Text Area'></textarea>
           );
      default:
        return null;
    }
  };
  
  return (
    <>
    {
      contData.map((item,index) => ( 
        <div key={index} 
        style={{ backgroundColor: item.color,
                 height: item.height+'px',
                 width: item.width+'px',
                 boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                 margin:'20px 20px', 
                 display:'grid', 
                 gridTemplateColumns: `repeat(${item.gridcol}, 1fr)`,
                 gridTemplateRows: `repeat(${Math.ceil(item.length / item.gridcol)}, auto)`,
                 gap: '1rem',
                 padding: '1rem',
                 overflow: 'hidden',
               }}>
                
         {tooldataArray.map((tooldata, index) => renderContent(tooldata, index))}
         {/* {tooldataArray.map((tooldata, index) => console.log(tooldata , index))} */}

        </div>
      ))

      }

    </>
  )
}

export default NewPage;