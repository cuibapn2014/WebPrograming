import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import "tinymce/plugins/image";
const TestTiny = () => {
  //   const editorRef = useRef(null);

  const [text, setText] = useState("");
  const [value, setValue] = useState(
    "<p>The quick brown fox jumps over the lazy dog</p>"
  );
  //   const log = () => {
  //     if (editorRef.current) {
  //       console.log(editorRef.current.getContent());
  //     }
  //   };
  return (
    <>
      <Editor
        value={value}
        onInit={(evt, editor) => {
          setText(editor.getContent({ format: "text" }));
        }}
        onEditorChange={(newValue, editor) => {
          setValue(newValue);
          setText(editor.getContent({ format: "code" }));
        }}
        plugins="lists link image paste help wordcount image code "
        toolbar="undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help | image | code"
      />
      {/* <button onClick={log}>Log editor content</button> */}
      <div>{text}</div>
    </>
  );
};

export default TestTiny;
