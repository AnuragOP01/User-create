import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Sidebar = (data) => {

  const [item,setItem] = useState(0);
    const setData = (val) =>{
        setItem(val);
    }

  return (
    <div className="flex">
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">   
              
              <a
                onClick={()=>setData(1)} className={`flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 ${
                  item === 1 ? 'transform scale-120' : 'transform scale-100'
                } hover:bg-gray-50 hover:text-gray-700`}
                href="/home"
              >
                <span className={`mx-2 text-sm font-medium ${item === 1 ? 'text-2xl':'text-sm'}`}>Dashboard</span>
              </a>

              <a
              onClick={()=>setData(2)} 
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/home/learning"
              >
                <span className={`mx-2 text-sm font-medium ${item === 2 ? 'text-2xl':'text-sm'}`}>Learnings</span>
              </a>

              <a
              onClick={()=>setData(3)} 
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/home/nda"
              >
                <span className={`mx-2 text-sm font-medium ${item === 3 ? 'text-2xl':'text-sm'}`}>NDA</span>
              </a>

              <a
              onClick={()=>setData(4)} 
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/home/resumebuilder"
              >
                <span className={`mx-2 text-sm font-medium ${item === 4 ? 'text-2xl':'text-sm'}`}>Resume</span>
              </a>

              <a
              onClick={()=>setData(5)} 
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/home/offerletter"
              >
                <span className={`mx-2 text-sm font-medium ${item === 5 ? 'text-2xl':'text-sm'}`}>Offer Letter</span>
              </a>

              <a
              onClick={()=>setData(6)} 
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="/home/certificate"
              >
                <span className={`mx-2 text-sm font-medium ${item === 6 ? 'text-2xl ':'text-sm'}`}>Certificate</span>
              </a>

            </div>
          </nav>
        </div>
      </aside>
      
      <Outlet />
    </div>
  );
};

export default Sidebar;
