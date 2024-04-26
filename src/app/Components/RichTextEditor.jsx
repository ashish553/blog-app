'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import '@/app/assets/scss/blogpage.scss'

// import ReactQuill from 'react-quill';

// const ReactQuill = typeof window === 'object' ? require('react-quill') : () => false;
const QuillNoSSRWrapper = dynamic(()=>import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

function RichTextEditor() {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["red", "#785412"] }],
      [{ background: ["red", "#785412"] }]
    ]
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font"
  ];

  const [code, setCode] = useState("hellllo");
  const handleProcedureContentChange = (content, delta, source, editor) => {
    setCode(content);
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };

  return (
    <>
      {console.log(code)}
      <QuillNoSSRWrapper
        theme="snow"
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
      />
    </>
  );
}

export default RichTextEditor