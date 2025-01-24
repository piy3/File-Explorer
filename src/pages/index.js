import Folder from "@/app/components/Folder";
import data from "@/app/data";
import { useState } from "react";

export default function Home() {
  const [explorer, setExplorer] = useState(data);
  const [content, setContent] = useState("");

  return (
    <div>
      <h3 className="text-white text-[28px] font-bold text-center bg-black">File Explorer</h3>
      <div className="flex bg-black">
        <div className="text-white ml-2 w-fit resize-x  overflow-y-auto overflow-x-hidden border-2 min-h-[400px] min-w-[170px] rounded-md">
          <Folder explorer={explorer} setContent={setContent}></Folder>
        </div>
        <div className="w-full border-2 bg-sky-100 min-h-[100vh] rounded-lg m-2 mt-0">
          {content}
        </div>
      </div>
    </div>
  );
}
