/* eslint-disable react/jsx-key */
import React from "react";

const ReactComponent = (props) => {
  const dataobj = props.data

  return (
    <div>
      {dataobj && dataobj.paths && dataobj.paths.map((path, index) => (
        <div
          key={index}
          className="rounded-lg  shadow-md p-4 flex flex-col items-center mb-8">
          <div className="text-center text-2xl rounded-md px-3 py-3 font-semibold bg-gray-400 hover:bg-gray-600 cursor-pointer mb-4">
            {path.title}
          </div>
          <p className="text-center text-gray-600 mb-4">{path.description}</p>
          <div className="flex flex-col items-center gap-4">
            <div>
              {path.links.map((linkpath, ind) => (
                <li key={ind} className="underline text-gray-300 hover:text-blue-800">
                  <a href={linkpath} target="_blank">{linkpath}</a>
                </li>
              ))}
            </div>
          </div>
          
        </div>
      ))}
    </div>




  );
};

export default ReactComponent;