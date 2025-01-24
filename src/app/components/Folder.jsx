'use client'
import React, { useState } from "react";
import { IoIosArrowDown,IoIosArrowForward } from "react-icons/io";


function Folder({ explorer ,setContent}) {
  const [openFolder, setOpenFolder] = useState(false);

  const handleFolderClick = (e)=>{
    e.stopPropagation();
    setOpenFolder(!openFolder);
  }

  const handleFileClick = (e,content)=>{
    e.stopPropagation();
    console.log("cnt ",content);
    setContent(content);
  }

  if (explorer.isFolder) {
    return (
      <div className="">
        <div
          className="pl-2 relative  hover:cursor-pointer hover:bg-slate-400"
          onClick={(e)=> handleFolderClick(e) }
        >
          📂{explorer.name}
          {openFolder?<IoIosArrowDown className="inline"/>:<IoIosArrowForward className="inline"/>}
        </div>
          
          <div className={`${openFolder ? "block" : "hidden"}    pl-2`} >
            {explorer.items.map((explore) => {
              return <Folder explorer={explore} key={explore.id} setContent={setContent}></Folder>;
            })}
          </div>
      </div>
    );
  } else {
    return (
      
        <div className="pl-2 hover:bg-slate-100 hover:text-black" onClick={(e)=>handleFileClick(e,explorer.content)}>
          📄{explorer.name}
        </div>
      )
    
  }
}

export default Folder;
