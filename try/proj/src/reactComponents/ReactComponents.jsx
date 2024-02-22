import React from "react";

const ReactComponent = (props) => {
  const dataobj = props.data

  return (
    <div>
       {dataobj && dataobj.paths && dataobj.paths.map((path, index)=>(
        <div>
            <div className=" flex justify-center " key={index}>
                <div className=" flex flex-wrap gap-3 rounded-md px-3 py-3 justify-center text-3xl bg-gray-400 ">{path.title}</div>
                
            </div>
            <div>
              {path.links.map((linkpath, ind)=>(
                    <div key={ind}>
                      <a href={linkpath} target="blank" >{linkpath}</a>
                    </div>
                ))}
                <h4>{path.description}</h4>
            </div>
        </div>
        ))}
    </div>
  );
};

export default ReactComponent;