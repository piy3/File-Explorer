import React, { useState } from "react";
import { IoIosArrowDown,IoIosArrowForward } from "react-icons/io";

function Folder({ explorer }) {
  const [openFolder, setOpenFolder] = useState(false);

  if (explorer.isFolder) {
    return (
      <div className="">
        <div
          className="pl-2 relative  hover:cursor-pointer "
          onClick={(e) =>{
            e.stopPropagation();
            setOpenFolder(!openFolder)
          } }
        >
          📂{explorer.name}
          {openFolder?<IoIosArrowDown className="inline"/>:<IoIosArrowForward className="inline"/>}
          <div className={`${openFolder ? "block" : "hidden"}    pl-2`} >
            {explorer.items.map((explore) => {
              return <Folder explorer={explore} key={explore.id}></Folder>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      
        <div className="pl-2">
          📄{explorer.name}
        </div>
      )
    
  }
}

export default Folder;
