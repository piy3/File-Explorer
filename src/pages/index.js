import Folder from "@/app/components/Folder";
import JoditEditorr from "@/app/components/JoditEditor";
import data from "@/app/data";
import useTraverseTree from "@/app/hooks/use-traverse-tree";
import { useState } from "react";

export default function Home() {
  const [explorer, setExplorer] = useState(data);
  const [content, setContent] = useState("");
  const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId,item,isFolder)=>{
    const newTree = insertNode(explorer,folderId,item,isFolder);
    setExplorer(newTree);
  }

  return (
    <div>
      <h3 className="text-white text-[28px] font-bold text-center bg-black">
        File Explorer
      </h3>
      <div className="flex bg-black">
        <div className="text-white ml-2  resize-x  overflow-y-auto overflow-x-hidden border-2 min-h-[400px] w-auto min-w-[150px] rounded-md">
          <Folder explorer={explorer} setContent={setContent} handleInsertNode={handleInsertNode}></Folder>
        </div>
        <div className="w-[80%]  border-2 bg-black p-2 min-h-[100vh] rounded-lg m-2 mt-0">
          <div className="">
            <button className="bg-green-400 rounded-md pl-2 pr-2 ml-2">
              Save
            </button>
          </div>
          <JoditEditorr
            allContent={content}
            setAllContent={setContent}
          ></JoditEditorr>
          {/* {content} */}
        </div>
      </div>
    </div>
  );
}
