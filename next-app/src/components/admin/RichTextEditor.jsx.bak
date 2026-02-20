import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'color': [] }, { 'background': [] }],
    ['link', 'image', 'video'],
    ['blockquote', 'code-block'],
    [{ 'align': [] }],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'color', 'background',
  'link', 'image', 'video',
  'blockquote', 'code-block',
  'align'
];

export default function RichTextEditor({ value, onChange, placeholder = "Write your content here..." }) {
  return (
    <div className="rich-text-editor">
      <style>{`
        .rich-text-editor .ql-container {
          min-height: 400px;
          font-size: 16px;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
        }
        .rich-text-editor .ql-toolbar {
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          background: #f8f9fa;
        }
        .rich-text-editor .ql-editor {
          min-height: 400px;
        }
        .rich-text-editor .ql-editor h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 1em 0 0.5em;
        }
        .rich-text-editor .ql-editor h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 1em 0 0.5em;
        }
        .rich-text-editor .ql-editor h3 {
          font-size: 1.2em;
          font-weight: bold;
          margin: 1em 0 0.5em;
        }
        .rich-text-editor .ql-editor p {
          margin-bottom: 1em;
          line-height: 1.6;
        }
        .rich-text-editor .ql-editor ul, .rich-text-editor .ql-editor ol {
          padding-left: 1.5em;
          margin-bottom: 1em;
        }
      `}</style>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  );
}