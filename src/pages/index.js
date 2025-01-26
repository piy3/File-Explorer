import Folder from "@/app/components/Folder";
import JoditEditorr from "@/app/components/JoditEditor";
import data from "@/app/data";
import useTraverseTree from "@/app/hooks/use-traverse-tree";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [explorer, setExplorer] = useState(data);
  const [content, setContent] = useState("");
  const [currFileId,setCurrFileId] = useState(null);
  const [loading,setLoading] = useState(false);

  const {insertNode,updateContent} = useTraverseTree();

  const handleInsertNode = (folderId,item,isFolder)=>{
    const newTree = insertNode(explorer,folderId,item,isFolder);
    setExplorer(newTree);
  }

  const handleUpdateContent = ()=>{
    setLoading(true);
    if(currFileId){

      const newTree = updateContent(explorer,currFileId,content);
      setExplorer(newTree);
    }
    setTimeout(()=>{

      setLoading(false);
    },2000)
  }

  return (
    <div>
      <h3 className="text-white text-[28px] font-bold text-center bg-black">
        File Explorer
      </h3>
      <div className="flex bg-black">
        <div className="text-white ml-2  resize-x  overflow-y-auto overflow-x-hidden border-2 min-h-[400px] w-auto min-w-[150px] rounded-md">
          <Folder explorer={explorer} setContent={setContent} handleInsertNode={handleInsertNode} setCurrFileId={setCurrFileId}></Folder>
        </div>
        <div className="w-[80%]  border-2 bg-black p-2 min-h-[100vh] rounded-lg m-2 mt-0">
          {
            currFileId?
          <div className="">
            <button onClick={handleUpdateContent} className="bg-green-400 rounded-md pl-2 pr-2 ml-2">
              {loading?'Saving...':'Save'}
            </button>
          <JoditEditorr
            allContent={content}
            setAllContent={setContent}
          ></JoditEditorr>
          </div>:
          <div className="flex items-center justify-center h-full">
          <div className="flex-col items-center justify-center">

            <img src={'https://cdn-icons-png.flaticon.com/512/1573/1573373.png'} className="ml-14" alt='select' width={100} height={100}></img>
          <h4 className="text-white font-serif font-bold text-lg">Select a file to start editing..</h4>
          </div>
          </div>
          }
          
        </div>
      </div>
    </div>
  );
}
