import React from "react";

const ReactComponent = (props) => {
  const dataobj = props.data

  return (
    <div>
       {dataobj && dataobj.paths && dataobj.paths.map((path, index)=>(
            <div key={index}>
                <h4>{path.title}</h4>
                <h4>{path.description}</h4>
            </div>
        ))}
    </div>
  );
};

export default ReactComponent;