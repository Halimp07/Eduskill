import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { AiOutlineExpandAlt } from "react-icons/ai";

const Compiler = () => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [output, setOutput] = useState("");
  const [showPreview, setShowPreview] = useState(false); // State to control the preview visibility

  useEffect(() => {
    compileCode();
  }, [htmlCode, cssCode]);

  const compileCode = () => {
    // Combine HTML and CSS into a single HTML string
    const compiledCode = `<style>${cssCode}</style>${htmlCode}`;
    setOutput(compiledCode);
  };

  const handleCompileClick = () => {
    compileCode();
    setShowPreview(true); // Show the preview when the "Compile" button is clicked
  };

  const handleDeleteClick = () => {
    setShowPreview(false); // Hide the preview when the "Delete" button is clicked
  };

  return (
    <div className="flex">
      {/* Left Section */}
        <div className="mb-0 mr-4">
          <div className="flex justify-between bg-Orange_Primary rounded-t-xl p-2">
            <h2 className="text-base font-light ml-4 text-white">HTML</h2>
            <h2 className="text-base font-light ml-4 text-white">Salin Code</h2>
          </div>
          <textarea
            placeholder="<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>"
            rows="6"
            className="w-[390px] h-[408px] border border-[#E7E7E7] bg-[#E7E7E7] rounded-b-xl placeholder:p-4" // Add border-gray-300 class for gray border
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
          />
      </div>

      {/* Right Section */}
      {output && (
        <div className="flex flex-col">
          <div className="mb-1">
            <div className="flex justify-between bg-Orange_Primary rounded-t-xl p-2">
              <h2 className="text-base font-light ml-4 text-white">Preview</h2>
              <h2 className="text-2xl font-light ml-4 text-white">
                <AiOutlineExpandAlt />
              </h2>
            </div>
            <div className="w-[310px] h-[180px] border border-white bg-white rounded-b-xl p-4">
              {ReactHtmlParser(output)}
            </div>
          </div>

          <div className="mt-1">
            <div className="flex justify-between bg-Orange_Primary rounded-t-xl p-2">
              <button
                className="text-base font-light ml-4 text-white"
                onClick={handleCompileClick} // Use handleCompileClick to trigger compilation and show preview
              >
                Test Output
              </button>
              <h2 className="text-2xl font-light ml-4 text-white">
                <AiOutlineExpandAlt />
              </h2>
            </div>
            {/* Preview Section */}
            {showPreview && (
              <div className="w-[310px] h-[180px] border-[#667085] bg-[#667085] rounded-b-xl rounded p-4 text-white">
                <div dangerouslySetInnerHTML={{ __html: output }} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Compiler;
