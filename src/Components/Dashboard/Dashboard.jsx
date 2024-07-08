import React, { useState } from 'react'
import NewPage from '../Createpage/NewPage'
import Toolbar from '../Toolbar/Toolbar'
import Configration from '../Popups/Configration'
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

const [model,Setmodel] = useState(false);


const [tooldataArray, setTooldataArray] = useState([]); 



// side bar code
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const toggleSidebar = () => {
setIsSidebarOpen(!isSidebarOpen);
};


const openModel = () =>{
Setmodel(true);
}

const closeModel = () =>{
Setmodel(false);
}


const toolbarbtn = (e) => {
setTooldataArray(prevArray => [...prevArray, e]);
}

return (
<div className='h-screen flex'>
<div className='bg-slate-200 w-[20%] h-full fixed border-r border-gray-300'>
<Toolbar openModel={openModel} closeModel={closeModel} sendData={toolbarbtn} />
</div>

<div className={`transition-transform duration-300 w-[80%] ml-[20%] relative ${isSidebarOpen ? 'transform scale-85 -translate-x-1/5 mr-[20%]' : 'transform scale-100 translate-x-0'}`}>
<NewPage toggleSidebar={toggleSidebar} tooldataArray={tooldataArray}/>
</div>

<Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />

<Configration isOpen={model} isClose={closeModel}/>
</div>
)
}

export default Dashboard;