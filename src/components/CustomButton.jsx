import React from 'react';
import { saveAs } from "file-saver";

const CustomButton = ({bgColor,text}) => {
  const saveFile = () => {
    saveAs(
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      "example.pdf"
    );
  };
  return (
    <div className='hire' style={{background:bgColor}}>
    <button onClick={saveFile}> {text}</button>
</div>
  );
};

export default CustomButton;
