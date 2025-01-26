"use client";
import React, { useState, useRef, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";


const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });


function JoditEditorr({ allContent, setAllContent}) {

    const editor = useRef(null); //declared a null value
    
    
  
    const config = useMemo(
      //  Using of useMemo while make custom configuration is strictly recomended
      () => ({
        //  if you don't use it the editor will lose focus every time when you make any change to the editor, even an addition of one character
        /* Custom image uploader button configuretion to accept image and convert it to base64 format */
        toolbarButtonSize: "middle",
        style: { font: "18px TimesNewRoman" },
        buttons: [
        //   "source",
          "|",
          "bold",
          "strikethrough",
          "underline",
          "italic",
          "|",
          "ul",
          "ol",
          "|",
          "outdent",
          "indent",
          "|",
          "font",
          "fontsize",
          "brush",
          "paragraph",
          "|",
          // 'image',
          // 'video',
          "table",
          "link",
          "|",
          "align",
          "undo",
          "redo",
          "|",
          "hr",
          // 'eraser',
          "copyformat",
          "|",
          "symbols",
          // "fullsize",
          // 'about',
          "selectAll",
          "preview",
          "find",
          // 'print',
          // ...(true
          //   ? [
          //       {
          //         name: "InsertTab",
          //         // tooltip: "Insert Tab",
          //         exec: (editor) => {
          //           editor.s.insertHTML(`&nbsp;&nbsp;&nbsp;&nbsp`); // Add current date or custom content
          //         },
          //       },
          //     ]
          //   : []),
          
        ],
        uploader: {
          insertImageAsBase64URI: true,
          imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"], // this line is not much important , use if you only strictly want to allow some specific image format
        },
        events: {
          afterInit: (editorInstance) => {
            // Register a custom command for Tab key
            editorInstance.registerHotkeyToCommand(
              "Tab",
              "insertTabSpaces",
              true
            );
            console.log("detected...");
  
            // Add the command to insert 4 spaces
            editorInstance.events.on("execCommand", (command) => {
              if (command === "insertTabSpaces") {
                editorInstance.s.insertHTML("&nbsp;&nbsp;&nbsp;&nbsp;");
                return false; // Prevent default Tab behavior
              }
            });
          },
        },
      }),
      []
    );
  
    const handleChange = (value) => {
      setAllContent(value);
    };
  
  
    return (
      <div className="flex-grow flex items-center flex-col overflow-hidden">
        <div className="flex-grow w-[98%]  flex flex-col">
          {/* <Button className="w-[50px] relative top-9 ml-[95%]">Print</Button> */}
          {/* Main initialization of the Jodit editor */}
          <JoditEditor
            ref={editor} // Important
            value={allContent} // Important
            config={config} // Use for custom configs
            onBlur={handleChange} // Handle changes
            className="w-full flex-grow overflow-hidden mt-1 bg-slate-700"
          />
          <style>
            {`
          .jodit-wysiwyg {
            overflow: auto !important;
            height: calc(100% - 40px) !important; /* Adjust for toolbar height */
            margin-top: 20px;
            width: 100% !important;
          }
          .jodit-container {
            height: 90vh !important;
            {/* width: 90vw !important; */}
            border: 2px solid #ccc;
            border-radius: 8px;
            display: flex !important;
            flex-direction: column;
          }
          .jodit-react-container {
            height: 100% !important;
            width: 100% !important;
          }
          .jodit-toolbar {
            position: relative !important; /* Make toolbar sticky */
            top: 0;
            z-index: 100; /* Ensure toolbar stays on top */
            background: #fff; /* Match the toolbar background */
          }
          .jodit-workplace {
            height: 100% !important;
  
            flex-grow: 1 !important;
            overflow: auto; /* Enable scrolling for content */
            border: 1px solid #ddd;
          }
          
        `}
          </style>
        </div>
    
      </div>
    );
  }
  
  export default JoditEditorr;