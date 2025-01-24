import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Folder from "@/app/components/Folder";
import data from "@/app/data";
import { useState } from "react";

export default function Home() {
  const [explorer, setExplorer] = useState(data);

  return (
    <div>
      <h3 className="text-[28px] font-bold text-center">File Explorer</h3>
      <div className="w-fit resize-x  overflow-y-auto overflow-x-hidden border-2 min-h-[400px] min-w-[150px] rounded-md">
        <Folder explorer={explorer}></Folder>
      </div>
    </div>
  );
}
