"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { AiFillFolderAdd, AiOutlineFileAdd } from "react-icons/ai";

function Folder({ explorer, setContent ,handleInsertNode,setCurrFileId}) {
  const [openFolder, setOpenFolder] = useState(false);
  const [file, setFile] = useState({
    isOpen: false,
    isFolder: null,
  });
  const [input,setInput] = useState('');

  const handleFolderClick = (e) => {
    e.stopPropagation();
    setOpenFolder(!openFolder);
    setCurrFileId(null);
  };

  const handleFileClick = (e, content,id) => {
    e.stopPropagation();
    console.log("cnt ", content);
    setContent(content);
    setCurrFileId(id);
  };

  const handleFileChange = (e, id, isfolder) => {
    console.log("called..")
    e.stopPropagation();
    
      setFile((prev) => {
      return {
        isOpen: true,
        isFolder: isfolder,
      };
    });
    
    
  };

  const handleAddFile =(e,id)=>{
    
    if(e.key=='Enter' && input){
      console.log("--", {ifFolder:file.isFolder,id:id,name:input})
      handleInsertNode(id,input,file.isFolder);
      setInput('')
      setFile((prev=>({...prev,isOpen:false})))
      //logic to add file or folder
    }else{
      return ;
    }
  }

  if (explorer.isFolder) {
    return (
      <div className="">
        <div
          className="pl-2 relative flex items-center  hover:cursor-pointer hover:bg-slate-600"
          onClick={(e) => handleFolderClick(e)}
        >
          {openFolder ? (
            <IoIosArrowDown className="inline " />
          ) : (
            <IoIosArrowForward className="inline " />
          )}
          📂{explorer.name}
          <AiFillFolderAdd
            className=" absolute right-1"
            onClick={(e) => handleFileChange(e, explorer.id, true)}
          />
          <AiOutlineFileAdd
            className=" absolute right-6"
            onClick={(e) => handleFileChange(e, explorer.id, false)}
          />
        </div>
        {file.isOpen && <span className="ml-4">{file.isFolder?'📂':'📄'}
        <input 
        type="text" className='w-[70%] mt-1 rounded-md text-black pl-1'
        // autoFocus={true}  
        onBlur={(e)=>{
          console.log("focus changed...")
          e.stopPropagation();
          setFile((prev)=>({...prev,isOpen:false}));
        }}
        onKeyDown={(e)=>handleAddFile(e,explorer.id)}
        onChange={(e)=>setInput(e.target.value)}
        value = {input}
        ></input></span>}
        <div className={`${openFolder ? "block" : "hidden"}    pl-2`}>
          {explorer.items.map((explore) => {
            return (
              <Folder
                explorer={explore}
                key={explore.id}
                setContent={setContent}
                handleInsertNode={handleInsertNode}
                setCurrFileId={setCurrFileId}
              ></Folder>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="pl-2 hover:bg-slate-600 hover:text-black min-w-[180px]"
        onClick={(e) => handleFileClick(e, explorer.content,explorer.id)}
      >
        📄{explorer.name}
      </div>
    );
  }
}

export default Folder;
