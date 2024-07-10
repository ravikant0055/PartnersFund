import React, { useState , useEffect } from "react";
import NewPage from "../Createpage/NewPage";
import Toolbar from "../Toolbar/Toolbar";
import Configration from "../Popups/Configration";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../Store/buttonSlice";

const Dashboard = () => {
  const [model, Setmodel] = useState(false);
  const dispatch = useDispatch() ; 
  const fetchedData = useSelector(state => state.button);
  
  const [editingId , setEditingId] = useState(null) ; 
  const [nextId , setNextId] = useState(fetchedData.length > 0 ? parseInt(fetchedData[fetchedData.length - 1].id) + 1 : 0)
  const [tooldataArray, setTooldataArray] = useState([]);


  // side bar code
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    setNextId(fetchedData.length > 0 ? parseInt(fetchedData[fetchedData.length - 1].id) + 1 : buttonProperty.id)  
  }, [fetchedData])
  

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

  const toggleSidebar = (data) => {
    
    isSidebarOpen ? setEditingId(null) :  setEditingId(data.id)
    setIsSidebarOpen(!isSidebarOpen);

    // console.log(editingId)
  };

  const openModel = () => {
    Setmodel(true);
  };

  const closeModel = () => {
    Setmodel(false);
  };

  

  const toolbarbtn = (e) => {
    // console.log(e , "tool bar value") ; 
    setTooldataArray((prevArray) => [...prevArray, {e , id : nextId}]);
    dispatch(add(buttonProperty));   //Update Redux 
    // toggleSidebar();
  };

  return (
    <div className="h-screen flex">

      <div className="bg-slate-200 w-[20%] h-full fixed border-r border-gray-300">
        <Toolbar openModel={openModel} closeModel={closeModel} sendData={toolbarbtn} setNextId={setNextId}/>
      </div>

      <div className={`transition-transform duration-300 w-[80%] ml-[20%] relative ${isSidebarOpen? "transform scale-85 -translate-x-1/5 mr-[20%]": "transform scale-100 translate-x-0"}`}>
        <NewPage toggleSidebar={toggleSidebar} tooldataArray={tooldataArray} nextId={nextId} />
      </div>

      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} editingId = {editingId} setTooldataArray={setTooldataArray} />

      <Configration isOpen={model} isClose={closeModel} />
    </div>
  );
};

export default Dashboard;